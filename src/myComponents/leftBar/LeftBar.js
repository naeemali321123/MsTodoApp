import {
  Button,
  ButtonGroup,
  Container,
  Input,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@mui/icons-material/Menu";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AssignmentIndRoundedIcon from "@mui/icons-material/AssignmentIndRounded";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";

import { useStyles } from "./LeftBarStyle";

const Leftbar = () => {
  const classes = useStyles();
  return (
    <>
      <ButtonGroup orientation="vertical" className={classes.container}>
        <Button variant="contained" className={classes.padding}>
          <MenuIcon className={classes.icon} />
        </Button>

        <Button variant="contained" className={classes.item}>
          <LightModeOutlinedIcon className={classes.icon} />
          <Typography className={classes.text}>My Day</Typography>
        </Button>

        <Button variant="contained" className={classes.item}>
          <StarBorderOutlinedIcon className={classes.icon} />
          <Typography className={classes.text}>Important</Typography>
        </Button>
        <Button variant="contained" className={classes.item}>
          <CalendarMonthOutlinedIcon className={classes.icon} />
          <Typography className={classes.text}>Planned</Typography>
        </Button>
        <Button variant="contained" className={classes.item}>
          <AssignmentIndRoundedIcon className={classes.icon} />
          <Typography className={classes.text}>Assigned to me</Typography>
        </Button>
        <Button variant="contained" className={classes.item}>
          <HomeOutlinedIcon className={classes.icon} />
          <Typography className={classes.text}>Task</Typography>
        </Button>
        <Button variant="contained" className={classes.item}>
          <AddOutlinedIcon className={classes.icon} />
          <Input
            className={classes.text}
            color="primary"
            placeholder="New Task"
          />
          <div variant="contained" style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button>
              <CreateNewFolderOutlinedIcon />
            </Button>
          </div>
        </Button>

        <div className={classes.leftbarbottom}>
          <ButtonGroup>
            <Button variant="outlined">
              <MailOutlineIcon />
            </Button>
            <Button variant="outlined">
              <CalendarMonthOutlinedIcon />
            </Button>
            <Button variant="outlined">
              <PeopleAltOutlinedIcon />
            </Button>
            <Button variant="outlined">
              <AttachFileIcon />
            </Button>
            <Button variant="outlined">
              <CheckOutlinedIcon />
            </Button>
          </ButtonGroup>
        </div>
      </ButtonGroup>
    </>
  );
};

export default Leftbar;
