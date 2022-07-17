import { Grid, Hidden } from "@mui/material";
import "./App.css";
import LeftBar from "./myComponents/leftBar/LeftBar";
import RightBar from "./myComponents/rightBar/RightBar";
import Navbar from "./myComponents/navbar/Navbar";
import Todos from "./myComponents/todos/Todos";
import CounterApp from './myComponents/counterApp/CounterApp'

function App() {
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={2.85}>
          <Hidden >
            <LeftBar />
          </Hidden>
        </Grid>
        <Grid item md={6.30}>
          <Todos />
          <Todos />
        </Grid>
        <Grid item xs={2.85}>
          <Hidden >
            <RightBar />
          </Hidden>
        </Grid>
      </Grid>
    </>
  );
}
export default App;
