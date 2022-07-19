import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Grid container spacing={1} className="center main" px={{ xs: 5, sm: 10 }} py={{ xs: 5, sm: 10 }}>
      <Grid item xs={12} align="center">
        <Typography component="h1" variant="h1">
            Timeline
        </Typography>
        </Grid>
        <Grid item xs={12} align="center">
        <img style={{height: 300}} alt='timeline' src='https://cdn-icons-png.flaticon.com/512/4394/4394577.png'/>
        </Grid>
        <Grid item xs={12} align="center">
        <Button
          color="primary"
          variant="contained"
          to="/createitem"
          component={Link}
        >
          Create Item
        </Button>
        </Grid>
        <Grid item xs={12} align="center">
          <Button
            color="primary"
            variant="contained"
            to="/items"
            component={Link}
          >
            View All Items
          </Button>
        </Grid>
      </Grid>
  );
};

export default HomePage;
