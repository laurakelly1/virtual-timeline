import { Card, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { TimelineOppositeContent } from "@mui/lab";

const TimeLine = () => {
  const [getItems, setGetItems] = useState([]);

  const getAllItems = async () => {
    let res = await axios.get(
      "https://virtual-timeline.herokuapp.com/api/items/"
    );
    let data = res.data;
    const sortedData = data.sort((a, b) => parseInt(a.date) - parseInt(b.date));
    console.log(data);
    setGetItems(sortedData);
  };

  useEffect(() => {
    getAllItems();
  }, []);

  const content = () => {
    return getItems.map((item) => (
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
          <Typography
              component="body1"
              variant="body1"
              className="content-date"
            >
              {item.date}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            
            <Card className="content" variant="outlined">
              <Typography component="h5" variant="h5" className="content-title">
                {item.name}
              </Typography>
              <Typography
                component="body1"
                variant="body1"
                className="content-description"
              >
                {item.description}
              </Typography>
            </Card>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    ));
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
      <Grid align="start" className="timeline">{content()}</Grid>
    </Grid>
  );
};

export default TimeLine;
