import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Button from "./Button";
import Divider from "./Divider";
import Heading from "./Heading";
import Image from "./Image";
import SocialMedia from "./SocialMedia";
import Text from "./Text";
import Video from "./Video";

const useStyles = makeStyles((theme) => ({
  textItem: {
    border: "1px solid #ccc",
    cursor: "move",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100px",
    transition: "box-shadow 0.3s ease",
    "&:hover": {
      boxShadow: "0px 0px 25px 0px rgba(0,0,0,0.3)",
    },
  },
}));

const ContentTab: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item md={4}>
        <div className={classes.textItem}>
          <Heading />
        </div>
      </Grid>
      <Grid item md={4}>
        <div className={classes.textItem}>
          <Text />
        </div>
      </Grid>
      <Grid item md={4}>
        <div className={classes.textItem}>
          <Button />
        </div>
      </Grid>
      <Grid item md={4}>
        <div className={classes.textItem}>
          <Divider />
        </div>
      </Grid>
      <Grid item md={4}>
        <div className={classes.textItem}>
          <Image />
        </div>
      </Grid>
      <Grid item md={4}>
        <div className={classes.textItem}>
          <Video />
        </div>
      </Grid>
      <Grid item md={4}>
        <div className={classes.textItem}>
          <SocialMedia />
        </div>
      </Grid>
    </Grid>
  );
};

export default ContentTab;
