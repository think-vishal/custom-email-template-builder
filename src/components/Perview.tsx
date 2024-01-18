import { useDrop } from "react-dnd";
import { makeStyles } from "@mui/styles";
import { Box, Paper } from "@mui/material";
import LayoutCell from "./LayoutCell";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  canvas: {
    height: "90vh",
    backgroundColor: "#ffffff",
    padding: "20px",
    border: "1px solid #ccc",
  },
  section: {
    marginBottom: "20px",
    marginTop: "20px",
  },
  dropArea: {
    minHeight: "200px",
    border: "2px dashed #ddd",
    padding: "20px",
    marginBottom: "20px",
  },
}));

const Preview = () => {
  const classes = useStyles();

  const layouts = useSelector((state: any) => state.layouts.layouts);

  const generalStyles = useSelector(
    (state: any) => state.generalStyles.generalStyles
  );

  const viewType = useSelector((state: any) => state.view.viewType);

  const [, drop] = useDrop(() => ({
    accept: "LAYOUT_ITEM",
    drop: () => {},
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const renderLayouts = () => {
    return layouts.map((layout: any, index: number) => {
      switch (layout.type) {
        case "single":
          return (
            <LayoutCell
              key={index}
              layoutId={layout.id}
              layoutType={layout.type}
              columnWidth={12}
            />
          );
        case "double":
          return (
            <LayoutCell
              key={index}
              layoutId={layout.id}
              layoutType={layout.type}
              columnWidth={6}
            />
          );
        case "three":
          return (
            <LayoutCell
              key={index}
              layoutId={layout.id}
              layoutType={layout.type}
              columnWidth={4}
            />
          );
        case "four":
          return (
            <LayoutCell
              key={index}
              layoutId={layout.id}
              layoutType={layout.type}
              columnWidth={3}
            />
          );
        case "leftRight":
          return (
            <LayoutCell
              key={index}
              layoutId={layout.id}
              layoutType={layout.type}
              columnWidth={index % 2 === 0 ? 4 : 8}
            />
          );
        case "rightLeft":
          return (
            <LayoutCell
              key={index}
              layoutId={layout.id}
              layoutType={layout.type}
              columnWidth={index % 2 === 0 ? 8 : 4}
            />
          );
        default:
          <Box>Default Layout Content</Box>;
          break;
      }
    });
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "grey",
          overflow: "hidden",
          position: "relative", 
        }}
      >
        <Paper
          ref={drop}
          elevation={3}
          sx={{
            width: viewType === "desktop" ? "210mm" : "100mm", 
            height: viewType === "desktop" ? "233.4mm" : "233.4mm",
            backgroundColor: generalStyles.backgroundColor,
            overflow: "auto", 
            "&::-webkit-scrollbar": {
              display: 'none', 
            },
            scrollbarWidth: 'none',
            '@media (max-width: 742px)': {
              width: '100%', // Update width for small sizes
              height: '100%', // Update height for small sizes
              // Add additional styles specific to smaller screens if needed
            }
        
          }}
        >
          <Grid container className={classes.section}>
            {renderLayouts()}
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export default Preview;
