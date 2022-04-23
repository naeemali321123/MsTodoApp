import { Grid, Hidden } from "@mui/material";
import "./App.css";
import LeftBar from "./myComponents/leftBar/LeftBar";
import Navbar from "./myComponents/navbar/Navbar";
import Todos from "./myComponents/todos/Todos";
import TestingMui from "./myComponents/testingMui/TestingMui"

function App() {
  return (
    <>
      <Navbar />
      <Grid container spacing={2} disablePadding justifyContent="space-between">
        <Grid item xs={3}>
          <Hidden mdDown>
          <LeftBar />
         </Hidden>
        </Grid>
        <Grid item md={6}>
          <Todos />
          <TestingMui/>
        </Grid>
        <Grid item xs={3}>
        <Hidden mdDown>
          <LeftBar />
         </Hidden>
        </Grid>
      </Grid>
    </>
  );
}
export default App;
