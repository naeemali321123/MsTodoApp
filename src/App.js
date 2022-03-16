import "./App.css";
import Navbar from "./myComponents/navbar/Navbar";
import LeftBar from "./myComponents/leftBar/LeftBar";
import Button1 from "./myComponents/button/Button";
import { classes } from "./MyStyle";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <>
      <Button1 />
      <h1 style={classes.button}>Paragraph</h1>

      <Navbar />

      <Grid container>
        <Grid>
          <LeftBar />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
