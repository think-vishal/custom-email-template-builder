import { Box, Typography } from "@mui/material";
import React from "react";
import { useDrag } from "react-dnd";
import { LuRectangleHorizontal } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { addContentItem } from "../../actions/contentActions";

const Button: React.FC = () => {
  const dispatch = useDispatch();

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "CONTENT_ITEM",
    item: { type: "CONTENT_ITEM" },
    end: (item, monitor) => {
      if (monitor.didDrop()) {
        const res: any = monitor.getDropResult();
        dispatch(addContentItem(res.layoutId, "button", "Button", {}));
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
      <LuRectangleHorizontal size={40} />
      <Typography>BUTTON</Typography>
    </Box>
  );
};

export default Button;
