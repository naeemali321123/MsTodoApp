import { Button, IconButton, ListItemText, Radio } from "@mui/material";
import { Box } from "@mui/system";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Input } from "@material-ui/core";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

export default function RightBar() {
  var todoTitle = "Go to Home on dated 12-10-22";
  return (
    <Box
      countainer
      sx={{ with: "100%", padding: "10px", backgroundColor: "#EDEBE9" }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          display: "flex",
          padding: "5px",
          alignItems: "center",
        }}
      >
        <Radio />
        <ListItemText>{todoTitle}</ListItemText>
        <IconButton>
          <StarOutlineIcon />
        </IconButton>
      </Box>
      <Box sx={{ backgroundColor: "white" }}>
        <IconButton>
          <AddOutlinedIcon />
        </IconButton>
        <Input disableUnderline placeholder="New list" aria-placeholder="" />
      </Box>
      <Button
        sx={{
          width: "100%",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          marginTop: '10px'
        }}
      >
        <IconButton>
          <LightModeOutlinedIcon />
        </IconButton>
        <ListItemText sx={{textAlign: 'left'}}>Add to My Day</ListItemText>
      </Button>
    </Box>
  );
}
