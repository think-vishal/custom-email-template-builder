import { Box, Typography } from "@mui/material";
import React from "react";
import { useDrag } from "react-dnd";
import { CiImageOn } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { addContentItem } from "../../actions/contentActions";

const Image: React.FC = () => {
  const dispatch = useDispatch();

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "CONTENT_ITEM",
    item: { type: "CONTENT_ITEM" },
    end: (item, monitor) => {
      if (monitor.didDrop()) {
        const res: any = monitor.getDropResult();
        dispatch(addContentItem(res.layoutId, "image", "Image", {}));
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
      <CiImageOn size={40} />
      <Typography>IMAGE</Typography>
    </Box>
  );
};

export default Image;
