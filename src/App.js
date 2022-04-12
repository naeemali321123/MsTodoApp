import { Grid } from "@mui/material";
import "./App.css";
import LeftBar from "./myComponents/leftBar/LeftBar";
import Navbar from "./myComponents/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Grid
        container spacing={0}
      >
        <Grid item xs={2.7}>
          <LeftBar />
        </Grid>
        <Grid item xs={6.6}>
          <LeftBar />
          <LeftBar />
        </Grid>
        <Grid item xs={2.7}>
          <LeftBar />
        </Grid>
      
        
      </Grid>
    </>
  );
}
export default App;
