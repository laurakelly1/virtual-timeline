import React, { useState } from "react";
import { Box, Container, Grid, Link, Typography } from "@mui/material";
import { blue, blueGrey } from '@mui/material/colors';

const color = blue[100];
const text = blueGrey[800];

const Footer = () => {
  return (
    <footer style={{
      position: "inherit",
      left: 0,
      bottom: 0,
      right: 0,}}>
        <Typography component="body1" variant="body1">
      <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }}
            bgcolor={color} color={text}>
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Contact</Box>
              <Box>
                <Link href="mailto:lkelly.laura@gmail.com" color="inherit" underline="hover">
                
            Email
          
                </Link>
              </Box>
              <Box>
                <Link
                  href="https://www.linkedin.com/in/lkelly-laura/"
                  color="inherit"
                  underline="hover"
                >
                  LinkedIn
                </Link>
              </Box>
              <Box>
                <Link href="https://github.com/laurakelly1" color="inherit" underline="hover">
                  GitHub
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Navigate</Box>
              <Box>
                <Link href="/createitems" color="inherit" underline="hover">
                  Create Item
                </Link>
              </Box>
              <Box>
                <Link href="/items" color="inherit" underline="hover">
                  View All Items
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Help</Box>
              <Box>
                <Link href="/" color="inherit" underline="hover">
                  Contact
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" underline="hover">
                  Privacy
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign='center' pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            Timeline &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
      </Typography>
    </footer>
  );
};

export default Footer;
