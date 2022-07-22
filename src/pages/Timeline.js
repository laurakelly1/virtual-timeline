import { Grid, Typography } from "@mui/material";
import React from "react";

const Timeline = () => {
  return (
    <Grid
      container
      spacing={1}
      className="center main"
      px={{ xs: 5, sm: 10 }}
      py={{ xs: 5, sm: 10 }}
    >
      <Grid item xs={12} align="center">
        <Typography component="h4" variant="h4">
          Timeline
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Timeline;
