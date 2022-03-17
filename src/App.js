import "./App.css";
import Navbar from "./myComponents/navbar/Navbar";
import LeftBar from "./myComponents/leftBar/LeftBar";
import {  Grid  } from "@material-ui/core";
import Button from "./myComponents/button/Button";

function App() {
  return (
    <>
      <Grid container direction="row">
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item>
          <LeftBar />
        </Grid>
        <Grid item xs={4}>
          <Button />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
