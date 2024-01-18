import { Box, Typography } from "@mui/material";
import React from "react";
import { useDrag } from "react-dnd";
import { TiSocialAtCircular } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { addContentItem } from "../../actions/contentActions";

const SocialMedia: React.FC = () => {
  const dispatch = useDispatch();

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "CONTENT_ITEM",
    item: { type: "CONTENT_ITEM" },
    end: (item, monitor) => {
      console.log("monitor.didDrop():", monitor.didDrop());
      if (monitor.didDrop()) {
        const res: any = monitor.getDropResult();
        dispatch(addContentItem(res.layoutId, "socialMedia", "Social Media", {}));
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
      <TiSocialAtCircular size={40} />
      <Typography>SOCIAL_MEDIA</Typography>
    </Box>
  );
};

export default SocialMedia;
