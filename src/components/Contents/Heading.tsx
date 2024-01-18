import { Box, Typography } from "@mui/material";
import React from "react";
import { useDrag } from "react-dnd";
import { FaHeading } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addContentItem } from "../../actions/contentActions";

const Heading: React.FC = () => {
  const dispatch = useDispatch();

  console.log("Here")

  const generalStyles = useSelector(
    (state: any) => state.generalStyles.generalStyles
  );

  console.log("generalStyles: ", generalStyles)

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "CONTENT_ITEM",
    item: { type: "CONTENT_ITEM" },
    end: (item, monitor) => {
      if (monitor.didDrop()) {
        const res: any = monitor.getDropResult();
        console.log("res: ", res)
        dispatch(addContentItem(res.layoutId, "heading", "Heading", {
          display: "block",
          fontSize: "2em",
          fontWeight: "bold",
          textAlign: "center",
          border: "none",
          overflow: "hidden",
          outline: "none",
          width: "100%",
          resize: "none",
          background: generalStyles.backgroundColor
        }));
      }
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <Box
      ref={drag}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      <FaHeading size={40} />
      <Typography>HEADING</Typography>
    </Box>
  );
};

export default Heading;
