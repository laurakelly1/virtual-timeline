import { Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Timeline = () => {
  const [getItems, setGetItems] = useState([]);

  const getAllItems = async () => {
    let res = await axios.get(
      "https://virtual-timeline.herokuapp.com/api/items/"
    );
    let data = res.data;
    const sortedData = data.sort((a,b) => parseInt(a.date) - parseInt(b.date))
    console.log(data)
    setGetItems(sortedData);
  };

  useEffect(() => {
    getAllItems();
  }, []);

  const content = () => {
    return (
        getItems.map( item => 
      <Grid item xs={12} align="center" className="container right">
        <div className="content">
          <Typography component="h5" variant="h5">
            {item.name}
          </Typography>
          <Typography component="body1" variant="body1">
            {item.description}
          </Typography>
          <br/>
          <Typography component="body1" variant="body1">
            {item.date}
          </Typography>
        </div>
      </Grid>
        )
    );
  };

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
      <div className="timeline">
        {content()}       
      </div>
    </Grid>
  );
};

export default Timeline;
