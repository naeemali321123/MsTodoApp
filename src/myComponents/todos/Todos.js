import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import Todo from "../todo/Todo";
import MenuIcon from "@mui/icons-material/Menu";




export default function Todos() {
  let todosListTest = "My Day";
  return (
    <>
      <Box>
        <List>
          <ListItem
            disablePadding
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Box sx={{ display: "flex" }}>
              <Button size="small">
                <MenuIcon sx={{ paddingRight: "5px" }} />
              </Button>
              <Typography fontSize={25}>{todosListTest}</Typography>
              <Button size="small">
                <MoreHorizIcon sx={{ paddingRight: "5px" }} />
              </Button>
            </Box>

            <Box>
              <Button size="small">
                <SortByAlphaIcon sx={{ paddingRight: "5px" }} />
                <ListItemText primary="Sort" />
              </Button>
              <Button size="small">
                <LightbulbOutlinedIcon sx={{ paddingRight: "5px" }} />
                <ListItemText primary="Suggestions" />
              </Button>
            </Box>
          </ListItem>
        </List>
      </Box>
      <Todo />
    </>
  );
}
