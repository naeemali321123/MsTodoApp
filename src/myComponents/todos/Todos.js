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

export default function Todos() {
  let todosListTest = "My Day";
  return (
    <>
      <Box>
        <List>
          <ListItem disablePadding sx={{display:'flex', justifyContent:'space-between'}}>
            <Box sx={{display:'flex'}}>
              <Typography>{todosListTest}</Typography>
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
    </>
  );
}
