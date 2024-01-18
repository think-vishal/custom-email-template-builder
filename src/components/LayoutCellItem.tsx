import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Divider,
  Box,
  Popover,
  IconButton,
} from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Content } from "../reducers/contentReducer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectContentItem } from "../actions/selectContentActions";
import ReactPlayer from "react-player";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeContentItem } from "../actions/contentActions";

interface LayoutCellItemProps {
  item: Content;
}

const LayoutCellItem: React.FC<LayoutCellItemProps> = ({ item }) => {
  const [headingValue, setHeadingValue] = useState("Heading");
  const [textValue, setTextValue] = useState("Text"); // Initial text value
  const [videoUrl, setVideoUrl] = useState(""); // Initial video URL
  const [textAreaRows, setTextAreaRows] = useState(1);
  const [hovered, setHovered] = useState(false);
  const [selected, setSelected] = useState(false);
  const dispatch = useDispatch();

  const handleContentClick = (event: any) => {
    console.log("select Item:", item);
    setAnchorEl(event.currentTarget);
    setSelected(true);
    dispatch(selectContentItem(item));
  };

  const image = useSelector((state: any) => state.image);

  let content;

  useEffect(() => {}, [item]);

  const handleTextareaChange = (e: any) => {
    const textareaLineHeight = 24;
    e.target.rows = 1;
    const currentRows = Math.ceil(e.target.scrollHeight / textareaLineHeight);

    if (currentRows <= 10) {
      setTextAreaRows(currentRows);
      e.target.rows = currentRows;
    } else {
      setTextAreaRows(10);
      e.target.rows = 10;
    }

    setHeadingValue(e.target.value);
  };

  switch (item.type) {
    case "heading":
      content = (
        <textarea
          value={headingValue}
          onChange={(e) => setHeadingValue(e.target.value)}
          rows={2}
          style={item.styles}
        />
      );
      break;
    case "text":
      content = (
        <textarea
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          rows={4}
          style={item.styles}
        />
      );
      break;
    case "button":
      content = (
        <Box sx={item.styles}>
          <Button
            variant="contained"
            color="primary"
            sx={item.styles.buttonStyles}
            onClick={() => console.log("Button clicked")}
          >
            {item.styles.buttonStyles
              ? item.styles.buttonStyles.text
              : "Button"}
          </Button>
        </Box>
      );
      break;
    case "divider":
      content = <Divider />;
      break;
    case "image":
      content = (
        <img
          src={
            image.imageUrl ? image.imageUrl : "https://via.placeholder.com/150"
          }
          alt={image.altText}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      );
      break;
    case "video":
      content =
        videoUrl === "" ? (
          <TextField
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            size="small"
            fullWidth
            placeholder="Paste YouTube video URL"
          />
        ) : (
          <ReactPlayer width="100%" height="100%" url={videoUrl} />
        );
      break;
    case "socialMedia":
      content = (
        <div>
          <YouTubeIcon />
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
        </div>
      );
      break;
    default:
      content = null;
      break;
  }

  const [anchorEl, setAnchorEl] = useState(null);

  const handleRemoveLayout = () => {
    dispatch(removeContentItem(item.layoutId, item.id));
    setAnchorEl(null);
    setSelected(false);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Box
        // style={{
        //   border: `2px ${hovered ? "solid #7ea5f5" : selected ? "solid #7ea5f5" : "none"}`,
        // }}
        // onMouseEnter={() => {
        //   setHovered(true);
        // }}
        // onMouseLeave={() => {
        //   setHovered(false);
        // }}
        // onClick={handleContentClick}
      >
        {content}
      </Box>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right', 
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <IconButton aria-label="delete" onClick={handleRemoveLayout}>
          <DeleteIcon />
        </IconButton>
      </Popover>
    </>
  );
};

export default LayoutCellItem;
