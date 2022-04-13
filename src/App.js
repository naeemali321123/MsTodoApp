import { Grid } from "@mui/material";
import "./App.css";
import LeftBar from "./myComponents/leftBar/LeftBar";
import Navbar from "./myComponents/navbar/Navbar";
import Todos from "./myComponents/todos/Todos";

function App() {
  return (
    <>
      <Navbar />
      <Grid container spacing={2} disablePadding justifyContent="space-between">
        <Grid item xs={3}>
          <LeftBar />
        </Grid>
        <Grid item xs={6}>
          <Todos />
        </Grid>
        <Grid item xs={3}>
          <LeftBar />
        </Grid>
      </Grid>
    </>
  );
}
export default App;
