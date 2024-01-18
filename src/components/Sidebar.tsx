import React, { useEffect } from "react";
import { Tabs, Tab, Paper, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SingleColumnLayout from "./Layouts/SingleColumnLayout";
import DoubleColumnLayout from "./Layouts/DoubleColumnLayout";
import ThreeColumnLayout from "./Layouts/ThreeColumnLayout";
import FourColumnLayout from "./Layouts/FourColumnLayout";
import RightColumnLayout from "./Layouts/RightColumnLayout";
import LeftColumnLayout from "./Layouts/LeftColumnLayout";
import ContentTab from "./Contents";
import RichTextEditor from "./Body";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  sidebar: {
    width: "auto",
    height: "90vh",
    borderRight: "1px solid #ccc",
  },
  section: {
    marginBottom: "20px",
    marginTop: "20px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  tabContent: {
    display: "flex",
    flexDirection: "column",
  },
  option: {
    padding: "10px",
    backgroundColor: "#fff",
    borderRadius: "4px",
    cursor: "move",
    marginBottom: "5px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  tabs: {
    transition: 'background-color 0.5s ease',
    backgroundColor: "#f4f4f4",
  },
}));

const Sidebar = () => {
  const classes = useStyles();

  const [tabValue, setTabValue] = React.useState(0);

  const selectedContentItem = useSelector(
    (state: any) => state.selectedContent.selectedContentItem
  );

  const handleTabChange = (event: any, newValue: any) => {
    setTabValue(newValue);
  };

  useEffect(() => {
    if (selectedContentItem && selectedContentItem.id) {
      setTabValue(2)
    }
  }, [selectedContentItem])

  return (
    <Paper className={classes.sidebar} elevation={3}>
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        className={classes.tabs}
      >
        <Tab label="Layouts" />
        <Tab label="Contents" />
        <Tab label="Body" />
      </Tabs>
      <Box className={classes.tabContent}>
        {tabValue === 0 && (
          <Box className={classes.section}>
            <SingleColumnLayout />
            <DoubleColumnLayout />
            <ThreeColumnLayout />
            <FourColumnLayout />
            <RightColumnLayout />
            <LeftColumnLayout />
          </Box>
        )}
        {tabValue === 1 && (
          <Box className={classes.section}>
          <ContentTab />
          </Box>)}
        {tabValue === 2 && (
          <Box className={classes.section}>
            <RichTextEditor />
          </Box>
        )}
      </Box>
    </Paper>
  );
};

export default Sidebar;
