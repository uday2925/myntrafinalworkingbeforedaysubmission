import { Container } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";

import "../App.css";
import { ShoppingBag } from "@mui/icons-material";

const MenSection = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    axios.get("API").then((response) => console.log(response));
  };

  useEffect(() => {
    getData();
  }, []);

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

  const data1 = [
    { btn: "Communication", image1: ["imageUrl1"], title: "title" },
  ];

  return (
    <Container style={{ display: "flex" }}>
      {/* Left Sidebar */}
      <div className="sidebar" style={{ flexBasis: "16rem" }}>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {[0, 1, 2, 3].map((value) => {
            const labelId = `checkbox-list-label-${value}`;

            return (
              <ListItem key={value} disablePadding>
                <ListItemButton
                  role={undefined}
                  onClick={handleToggle(value)}
                  dense
                >
                  <ListItemIcon style={{ minWidth: 0 }}>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(value) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    id={labelId}
                    primary={`Line item ${value + 1}`}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
          <Divider />
          {[0, 1, 2, 3].map((value) => {
            const labelId = `checkbox-list-label-${value}`;

            return (
              <ListItem key={value} disablePadding>
                <ListItemButton
                  role={undefined}
                  onClick={handleToggle(value)}
                  dense
                >
                  <ListItemIcon style={{ minWidth: 0 }}>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(value) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    id={labelId}
                    primary={`Line item ${value + 1}`}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </div>
      {/* Right side container */}
      <div style={{ flexGrow: "1", marginLeft: 20 }}>
        <Card sx={{ maxWidth: 275 }}>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent sx={{ paddingTop: 0, paddingBottom: 0 }}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ marginBottom: 0 }}
            >
              Brand
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Product Title
            </Typography>
            <div style={{ display: "flex" }}>
              <Typography
                sx={{ fontSize: 14, fontWeight: "bold" }}
                color="text.primary"
                gutterBottom
              >
                Price
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
                Strike Price
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  //   fontWeight: "bold",
                  marginLeft: 2,
                }}
                color="text.secondary"
                gutterBottom
              >
                (Discount)
              </Typography>
            </div>
          </CardContent>
          <CardActions sx={{ justifyContent: "space-around" }}>
            <Button
              variant="outlined"
              size="small"
              sx={{
                backgroundColor: "#ff3e6b",
                color: "white",
                fontWeight: "bold",
                borderColor: "#ff3e6b",
              }}
            >
              <ShoppingBag sx={{ marginRight: 1, fontSize: 18 }}></ShoppingBag>
              Add to cart
            </Button>
            <Button variant="outlined" size="small">
              <FavoriteIcon sx={{ marginRight: 1, fontSize: 18 }} />
              Wishlist
            </Button>
          </CardActions>
        </Card>
      </div>
    </Container>
  );
};

export default MenSection;
