import React, { useState } from "react";
import {
  TextField,
  Typography,
  Grid,
  Button,
  FormControl,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";


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
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: newItem.name,
        description: newItem.description,
        date: newItem.date,
      }),
    };
    const response = await fetch("/api/items/", requestOptions);
    const data = await response.json();
    navigate("/item/" + data.id,);
  };

  return (
    <Grid container spacing={1} className="center">
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
