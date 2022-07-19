import {
    Button,
    Grid,
    Typography,
  } from "@mui/material";
  import React, { useEffect, useState } from "react";
  import { Link, useNavigate, useParams } from "react-router-dom";
  import axios from 'axios'

  const DeleteItem = () => {
    let navigate = useNavigate();
    const { id } = useParams();
  
    const [item, setItem] = useState({
        name: "",
        description: "",
        date: "",
    });
  
    const getItemDetails = async () => {
      let res = await axios.get("http://localhost:8000/api/items/" + id + "/");
      let data = res.data;
      setItem(data);
    };
  
    const handleSubmit = async () => {
      await axios.delete("http://localhost:8000/api/items/" + id + "/");
      navigate("/items");
    };
  
    useEffect(() => {
      getItemDetails();
    }, []);
  
    return (
      <div>
        <Grid container spacing={1} className="center">
          <Grid item xs={12} align="center">
            <Typography component="h4" variant="h4">
              Are you sure you want to delete {item.name}?
            </Typography>
          </Grid>
          <Grid item xs={12} align="center">
            <Button color="primary" variant="contained" onClick={handleSubmit}>
              Yes
            </Button>
            <Button color="secondary" variant="contained" to="/items" component={Link}>
              No
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  };
  
  export default DeleteItem;
  