import { Container, PaginationItem } from "@mui/material";
import React, { useEffect, useState, useContext } from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CircularProgress from "@mui/material/CircularProgress";

import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { db } from "../firebase";

import "../App.css";
import { ShoppingBag } from "@mui/icons-material";

import Pagination from "@mui/material/Pagination";

const Products = ({ data }) => {
   const [info, setInfo] = useState([]);
   const [loading, setLoading] = useState(true);
   const { cart, handleCart } = useContext(CartContext);
   //   console.log(cart);

   useEffect(() => {
      console.log("hi");
      Fetchdata();
   }, [data]);

   const Fetchdata = async () => {
      setInfo([]);
      db.collection(data)
         .get()
         .then((querySnapshot) => {
            querySnapshot.forEach((element) => {
               let data = element.data();

               setInfo((arr) => [...arr, data]);
               setLoading(false);
            });
         });
   };

   const [page, setPage] = useState(1);

   // const handleSearch = () => {
   //   return info.filter(
   //     (item) => item.title.toLowerCase().includes(search)
   //     // item.symbol.toLowerCase().includes(search)
   //   );
   // };

   // const [data, setData] = useState([]);
   // const getData = () => {
   //   axios.get("API").then((response) => console.log(response));
   // };

   // useEffect(() => {
   //   getData();
   // }, []);

   const [checked, setChecked] = React.useState([0]);

   const handleToggle = (value) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];

      if (currentIndex === -1) {
         newChecked.push(value);
      } else {
         newChecked.splice(currentIndex, 1);
      }

      setChecked(newChecked);
   };

   return (
      <Container style={{ display: "flex" }}>
         {/* Left Sidebar */}

         {loading ? <CircularProgress sx={{textAlign:"center", width: "400px", fontSize:"15rem"}} /> : 
         <>
         <div className="sidebar" style={{ flexBasis: "16rem" }}>
            <List
               sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
               }}
            >
               <Divider />
               <h2>Brands</h2>

               {info.map((value) => {
                  const labelId = `checkbox-list-label-${value.brand}`;

                  return (
                     <ListItem key={value.brand} disablePadding>
                        <ListItemButton
                           role={undefined}
                           onClick={handleToggle(value.brand)}
                           dense
                        >
                           <ListItemIcon style={{ minWidth: 0 }}>
                              <Checkbox
                                 edge="start"
                                 checked={checked.indexOf(value.brand) !== -1}
                                 tabIndex={-1}
                                 disableRipple
                                 inputProps={{ "aria-labelledby": labelId }}
                              />
                           </ListItemIcon>
                           <ListItemText
                              id={labelId}
                              primary={`${value.brand}`}
                           />
                        </ListItemButton>
                     </ListItem>
                  );
               })}
            </List>
         </div>
         {/* Right side container */}

         <div className="productContainer">
            {info.map((e) => {
               return (
                  <Card sx={{ maxWidth: 275 }}>
                     <CardMedia
                        component="img"
                        // height="140"
                        image={e.link}
                        alt={e.title}
                        loading="lazy"
                     />
                     <CardContent
                        sx={{
                           paddingTop: 0,
                           paddingBottom: 0,
                           marginTop: "4px",
                        }}
                     >
                        <Typography
                           gutterBottom
                           // variant="h6"
                           component="div"
                           sx={{
                              marginBottom: 0,
                              fontWeight: "bold",
                              fontSize: "14px",
                           }}
                        >
                           {e.brand}
                        </Typography>
                       <div style={{ height: "6rem" }}>
                        <Typography
                           variant="body2"
                           color="text.secondary"
                           size="small"
                        >
                           {e.title}
                        </Typography>
                        </div>
                        <div style={{ display: "flex" }}>
                           <Typography
                              sx={{ fontSize: 14, fontWeight: "bold" }}
                              color="text.primary"
                              gutterBottom
                           >
                              Rs. {e.price}
                           </Typography>
                           <Typography
                              sx={{
                                 fontSize: 14,
                                 //   fontWeight: "bold",
                                 textDecoration: "line-through",
                                 marginLeft: 2,
                              }}
                              color="text.secondary"
                              gutterBottom
                           >
                              {e.strike}
                           </Typography>
                           <Typography
                              sx={{
                                 fontSize: 12,
                                 fontWeight: "light",
                                 marginLeft: 2,
                                 color: "orange",
                              }}
                              color="text.secondary"
                              gutterBottom
                           >
                              ({e.discount}% OFF)
                           </Typography>
                        </div>
                     </CardContent>
                     <CardActions
                        sx={{
                           justifyContent: "space-around",
                        }}
                     >
                        <Button
                           variant="outlined"
                           size="small"
                           sx={{
                              backgroundColor: "#ff3e6b",
                              color: "white",
                              // fontWeight: "bold",
                              borderColor: "#ff3e6b",
                              textTransform: "capitalize",
                           }}
                           onClick={() => {
                              handleCart(e);
                           }}
                        >
                           <ShoppingBag
                              sx={{
                                 fontSize: 15,
                                 margin: 0,
                                 marginRight: "4px",
                              }}
                           ></ShoppingBag>
                           Add to cart
                        </Button>
                        <Button
                           variant="outlined"
                           size="small"
                           sx={{
                              textTransform: "capitalize",
                              color: "black",
                              borderColor: "#ff3e6b",
                           }}
                        >
                           <FavoriteIcon
                              sx={{
                                 marginRight: "4px",
                                 fontSize: 15,
                                 textTransform: "capitalize",
                              }}
                           />
                           Wishlist
                        </Button>
                     </CardActions>
                  </Card>
               );
            })}
            <Pagination
               count={(info.length / 10).toFixed(0)}
               // renderItem={(item) => (
               //   <PaginationItem
               //     components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
               //     {...info}
               //   />
               // )}
               style={{
                  padding: 20,
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
               }}
            />
         </div>
         </>}

         {/* <DataGrid
        pagination
        pageSize={10}
        rowsPerPageOptions={[10]}
        components={{
          Pagination: CustomPagination,
        }}
        {...info}
      /> */}
      </Container>
   );
};

export default Products;
