import { Box, ButtonBase, IconButton, Input, Radio } from "@mui/material";

import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import EventRepeatOutlinedIcon from "@mui/icons-material/EventRepeatOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

export default function Todo() {
  return (
    <div>
      <Box sx={{ backgroundColor: "#EDEBE9", borderRadius: "5px" }}>
        <Box sx={{ display: "flex" }}>
          <Radio />
          <Input sx={{ width: "100%" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: "30px",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <IconButton>
              <CalendarMonthOutlinedIcon />
            </IconButton>
            <IconButton>
              <NotificationsNoneOutlinedIcon />
            </IconButton>
            <IconButton>
              <EventRepeatOutlinedIcon />
            </IconButton>
          </Box>
          <IconButton>
            <ButtonBase>Add</ButtonBase>
          </IconButton>
        </Box>
      </Box>
    </div>
  );
}
