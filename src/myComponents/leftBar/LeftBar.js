import { Container, Typography } from "@material-ui/core";
import MenuIcon from "@mui/icons-material/Menu";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AssignmentIndRoundedIcon from "@mui/icons-material/AssignmentIndRounded";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useStyles } from "./LeftBarStyle";

const Leftbar = () => {
  const classes = useStyles();
  return (
    
    <Container className={classes.container}>
      <div className={classes.item}>
        <MenuIcon className={classes.icon} />
        <Typography>Home Minister</Typography>
      </div>
      <div className={classes.item}>
        <LightModeOutlinedIcon className={classes.icon} />
        <Typography className={classes.text}>My Day</Typography>
      </div>

      <div className={classes.item}>
        <StarBorderOutlinedIcon className={classes.icon} />
        <Typography className={classes.text}>Important</Typography>
      </div>
      <div className={classes.item}>
        <CalendarMonthOutlinedIcon className={classes.icon} />
        <Typography className={classes.text}>Planned</Typography>
      </div>
      <div className={classes.item}>
        <AssignmentIndRoundedIcon className={classes.icon} />
        <Typography className={classes.text}>Assigned to me</Typography>
      </div>
      <div className={classes.item}>
        <HomeOutlinedIcon className={classes.icon} />
        <Typography className={classes.text}>Task</Typography>
      </div>
      <div className={classes.item}>
        <AddOutlinedIcon className={classes.icon} />
        <Typography className={classes.text}>New List</Typography>
      </div>
    </Container>
   
  );
};

export default Leftbar;
