import { useDrag } from "react-dnd";
import { Grid, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { addLayout } from "../../actions/layoutActions";

const useStyles = makeStyles({
  paper: {
    transition: "box-shadow 0.3s ease",
    boxShadow: "none",
    "&:hover": {
      boxShadow: "0px 0px 25px 0px rgba(0,0,0,0.3)",
    },
  },
});

const DoubleColumnLayout = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "LAYOUT_ITEM",
    item: { type: "LAYOUT_ITEM" },
    end: (item, monitor) => {
      if (monitor.didDrop()) {
        dispatch(addLayout("double"));
        dispatch(addLayout("double"));
      }
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <Paper className={classes.paper}>
      <Grid
        container
        style={{
          border: "1px solid #ccc",
          cursor: "move",
          opacity: isDragging ? 0.5 : 1,
        }}
        ref={drag}
      >
        <Grid item xs={6}>
          <div style={{ backgroundColor: "#f2f2f2", minHeight: "50px" }}></div>
        </Grid>
        <Grid item xs={6}>
          <div style={{ backgroundColor: "#e2e2e2", minHeight: "50px" }}></div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default DoubleColumnLayout;
