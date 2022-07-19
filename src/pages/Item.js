import { Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

const Item = () => {
  const { id } = useParams();

  const [item, setItem] = useState({});

  const getItemDetails = async () => {
    let res = await axios.get("https://virtual-timeline.herokuapp.com/api/items/" + id + "/");
    let data = res.data;
    setItem(data);
  };

  useEffect(() => {
    getItemDetails();
  }, []);

  return (
    <div className="center">
      <Grid container spacing={1}>
        <Grid item xs={12} align="center">
          <Typography component="h4" variant="h4">
            {item.name}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <Typography component="h5" variant="h5">
            {item.description}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <Typography component="h5" variant="h5">
            {item.date}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <Button
            color="primary"
            variant="contained"
            to={`/updateitem/${item.id}`}
            component={Link}
          >
            Update Item
          </Button>
        </Grid>
        <Grid item xs={12} align="center">
          <Button
            color="secondary"
            variant="contained"
            to={`/deleteitem/${item.id}`}
            component={Link}
          >
            Delete Item
          </Button>
        </Grid>
        <Grid item xs={12} align="center">
          <Button
            color="secondary"
            variant="contained"
            to="/items"
            component={Link}
          >
            Back
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Item;
