import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const Items = () => {
  const [getItems, setGetItems] = useState([]);

  const getAllItems = async () => {
    let res = await axios.get("https://virtual-timeline.herokuapp.com/api/items/");
    let data = res.data;
    setGetItems(data);
  };

  useEffect(() => {
    getAllItems();
  }, []);

  const itemList = () => {
    return getItems.map((item) => (
      
      <Grid item xs={4} align="center">
      <Card  key={item.id} variant="outlined">
      <CardContent>
      <Typography variant="h5">
        {item.name}
        </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" to={`/item/${item.id}`} component={Link}>Learn More</Button>
      </CardActions>
      </Card>
      </Grid>
    ));
  };

  return (
    <div className="center main">
    <Box sx={{ flexGrow: 1 }} px={{ xs: 5, sm: 10 }} py={{ xs: 5, sm: 10 }}>
    <Grid container spacing={2}>
      <Grid item xs={12} align="center">
      <Typography component="h4" variant="h4">
          All items
        </Typography>
      </Grid>
      
       {itemList()}
      
      <Grid item xs={12} align="center">
        <Button color="secondary" variant="contained" to="/" component={Link}>
          Back
        </Button>
      </Grid>
    </Grid>
    </Box>
    </div>
  );
};

export default Items;
