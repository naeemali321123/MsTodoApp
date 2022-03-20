import "./App.css";
import Navbar from "./myComponents/navbar/Navbar";
import LeftBar from "./myComponents/leftBar/LeftBar";
import { Box, Grid, Button, Radio, Hidden } from "@material-ui/core";
import { useState } from "react";

function App() {
   return (
    <>
      <Grid container direction="row">
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={2}>
          <LeftBar />
        </Grid>
        <Grid  item xs={8}>
          <Box>
            
          </Box>
        </Grid>
        <Grid  item xs={2}>
        </Grid>
        
      </Grid>
    </>
  );
}

export default App;
