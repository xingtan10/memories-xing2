import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  // [theme.breakpoints.down("sm")]: {
  //   mainContainer: {
  //     flexDirection: "column-reverse",
  //     display: "flex",
  //   },
  // },

  appBarSearch: {
    borderRadius: 4,
    marginBottom: "1rem",
    display: "flex",
    padding: "16px",
  },
  pagination: {
    borderRadius: 4,
    marginBottom: "1rem",
    padding: "16px",
  },
  gridContainer: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
      //     display: "flex",
    },
  },
}));
