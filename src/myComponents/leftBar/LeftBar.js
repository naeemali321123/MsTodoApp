import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Button, FormControl } from "@mui/material";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";
import { Input } from "@material-ui/core";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import DoneOutlineOutlinedIcon from "@mui/icons-material/DoneOutlineOutlined";

export default function LeftBar() {
  return (
    <Box sx={{ height:'100vh', display:'static', width: "100%", maxWidth: 360, bgcolor: "#EDEBE9" }}>
      <nav aria-label="main mailbox folders" >
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MenuIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LightModeOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="My Day" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <GradeOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Important" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CalendarMonthOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Planned" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PersonOutlineOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Assigned to me" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Tasks" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItem>
              <ListItemIcon>
                <AddOutlinedIcon />
              </ListItemIcon>
              <FormControl sx={{ width: "25ch" }}>
                <Input
                  disableUnderline
                  placeholder="New list"
                  aria-placeholder=""
                />
              </FormControl>
              <Button>
                <CreateNewFolderOutlinedIcon />
              </Button>
            </ListItem>
          </ListItem>
        </List>
        <Box sx={{
          display: 'flex',
          alignItems:'flex-end',
          height: '10vh'
         }} >
            <Button>
              <MailOutlineIcon />
            </Button>
            <Button size="small">
              <CalendarMonthOutlinedIcon />
            </Button>
            <Button size="small">
              <PeopleOutlineOutlinedIcon />
            </Button>
            <Button size="small">
              <AttachFileOutlinedIcon />
            </Button>
            <Button size="small">
              <DoneOutlineOutlinedIcon />
            </Button>
        </Box>
      </nav>
    </Box>
  );
}
