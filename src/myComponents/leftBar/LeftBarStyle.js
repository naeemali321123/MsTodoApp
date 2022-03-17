import { makeStyles } from "@material-ui/core";


export const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    width: '300px',
    color: "black",
    padding: theme.spacing(3),


    [theme.breakpoints.up("sm")]: {
      backgroundColor: "#edebe9",
      color: "#555",
    },
  },
  item: {
    display: "flex",
    alignItems: "left",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
  text: {
    fontWeight: 350,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

}));
