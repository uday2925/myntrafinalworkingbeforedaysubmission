import React, { useContext, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "./products.css";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { db } from "../firebase";
import { useState } from "react";
// import ReactLoading from "react-loading";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
export default function Products({ data }) {
  console.log("data:", data);
  const [info, setInfo] = useState([]);
  //   const [loading, setLoading] = useState(true);
  const { cart, handleCart } = useContext(CartContext);
  //   console.log(cart);

  useEffect(() => {
    Fetchdata();
  }, []);

  const Fetchdata = async () => {
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

  const theme = createTheme({
    status: {
      danger: "#e53e3e",
    },
    palette: {
      primary: {
        main: "#0971f1",
        darker: "#053e85",
      },
      neutral: {
        main: "#FF3E6C",
        contrastText: "#fff",
      },
    },
  });

  return (
    <>
      <Link to="/cart">cart</Link>
      <div className="productsContainer">
        {/* {loading ? (
          <ReactLoading
            type={"spin"}
            color={"#FF3E6C"}
            height={667}
            width={375}
          />
        ) : null} */}
        {info.map((e) => {
          return (
            <Card sx={{ maxWidth: 225 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  width="100%"
                  image={e.link}
                  alt={e.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="p" component="div">
                    <b>{e.title}</b>
                  </Typography>
                  <Typography>{e.brand}</Typography>
                  <Typography>Rs. {e.price}</Typography>
                  <Typography>{e.strikedOff}</Typography>
                  <Typography>{e.discount}%</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <ThemeProvider theme={theme}>
                  <Button
                    size="small"
                    color="neutral"
                    variant="contained"
                    onClick={() => {
                      handleCart(e);
                    }}
                  >
                    Add To Cart
                  </Button>
                </ThemeProvider>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </>
  );
}
