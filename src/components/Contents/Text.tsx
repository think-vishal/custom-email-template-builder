import { Box, Typography } from "@mui/material";
import React from "react";
import { useDrag } from "react-dnd";
import { PiTextAaLight } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { addContentItem } from "../../actions/contentActions";

const Text: React.FC = () => {
  const dispatch = useDispatch();

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "CONTENT_ITEM",
    item: { type: "CONTENT_ITEM" },
    end: (item, monitor) => {
      if (monitor.didDrop()) {
        const res: any = monitor.getDropResult();
        console.log("res: ",res)
        dispatch(addContentItem(res.layoutId, "text", "Text", {
          textAlign: "center",
          border: "none",
          overflow: "hidden",
          outline: "none",
          width: "100%",
          resize: "none",
          background: res.styles.backgroundColor
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
      <PiTextAaLight size={40} />
      <Typography>TEXT</Typography>
    </Box>
  );
};

export default Text;
