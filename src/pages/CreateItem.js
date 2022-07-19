import React, { useState } from "react";
import {
  TextField,
  Typography,
  Grid,
  Button,
  FormControl,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'


const CreateItem = () => {
  let navigate = useNavigate();
  const [newItem, setNewItem] = useState({
    name: "",
    description: "",
    date: "",
  });

  const handleChange = (e) => {
    setNewItem({
      ...newItem,
      [e.target.name]: e.target.value,
    });
  };

  // Need to be logged out of admin for this to work currently.
  const handleSubmit = async () => {   
    let res = await axios.post("https://virtual-timeline.herokuapp.com/api/items/", { 
      name: newItem.name,
      description: newItem.description,
      date: newItem.date,
    });
    let data = res.data;
    console.log(data);
    navigate("/item/" + data.id,);
    };

  return (
    <Grid container spacing={1} className="center main" px={{ xs: 5, sm: 10 }} py={{ xs: 5, sm: 10 }}>
      <Grid item xs={12} align="center">
        <Typography component="h4" variant="h4">
          Create Item
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <FormControl component="fieldset">
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            inputProps={{ style: { textAlign: "center" } }}
            onChange={handleChange}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} align="center">
        <FormControl component="fieldset">
          <TextField
            label="Description"
            name="description"
            variant="outlined"
            inputProps={{ min: 0, style: { textAlign: "center" } }}
            onChange={handleChange}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} align="center">
        <FormControl component="fieldset">
          <TextField
            type="date"
            name="date"
            variant="outlined"
            inputProps={{ min: 0, style: { textAlign: "center" } }}
            onChange={handleChange}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} align="center">
        <Button color="primary" variant="contained" onClick={handleSubmit}>
          Create Item
        </Button>
      </Grid>
      <Grid item xs={12} align="center">
        <Button color="secondary" variant="contained" to="/" component={Link}>
          Back
        </Button>
      </Grid>
    </Grid>
  );
};

export default CreateItem;
