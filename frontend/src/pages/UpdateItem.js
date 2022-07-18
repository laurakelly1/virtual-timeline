import {
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

const UpdateItem = () => {
  let navigate = useNavigate();
  const { id } = useParams();

  const [editItem, setEditItem] = useState({
    name: "",
    description: "",
    date: "",
  });

  const getItemDetails = async () => {
    axios.get("http://localhost:8000/api/items/" + id + "/").then(res => setEditItem(res.data))
  };

  const handleChange = (e) => {
    setEditItem({
      ...editItem,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    axios.put("http://localhost:8000/api/items/" + id + "/").then(res => setEditItem(res.data))

    // const requestOptions = {
    //   method: "PUT",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     name: editItem.name,
    //     description: editItem.description,
    //     date: editItem.date,
    //   }),
    // };
    // const response = await fetch("/api/items/" + id + "/", requestOptions);
    // const data = await response.json();
    navigate("/item/" + id);
  };

  useEffect(() => {
    getItemDetails();
  }, []);

  return (
    <div>
      <Grid container spacing={1} className="center">
        <Grid item xs={12} align="center">
          <Typography component="h4" variant="h4">
            Update Item
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <FormControl component="fieldset">
            <TextField
              label="Name"
              name="name"
              variant="outlined"
              value={editItem.name}
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
              multiline
              rows={4}
              value={editItem.description}
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
              value={editItem.date}
              inputProps={{ min: 0, style: { textAlign: "center" } }}
              onChange={handleChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} align="center">
          <Button color="primary" variant="contained" onClick={handleSubmit}>
            Update Item
          </Button>
        </Grid>
        <Grid item xs={12} align="center">
          <Button color="secondary" variant="contained" to="/" component={Link}>
            Back
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default UpdateItem;
