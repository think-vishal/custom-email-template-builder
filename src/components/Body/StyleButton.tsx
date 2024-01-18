import React, { useState } from "react";
import {
  Box,
  AccordionDetails,
  Typography,
  TextField,
  Divider,
  InputAdornment,
} from "@mui/material";
import "react-color-palette/css";
import { useSelector } from "react-redux";
import { updateButtonStyles } from "../../actions/contentActions";
import { useDispatch } from "react-redux";

const StyleButton: React.FC = () => {
  const [textColor, setTextColor] = useState("#561ecb");
  const [bgColor, setBgColor] = useState("#561ecb");
  const [text, setText] = useState("Button");
  const [actionUrl, setActionUrl] = useState("");

  const selectedContentItem = useSelector(
    (state: any) => state.selectedContent.selectedContentItem
  );

  const dispatch = useDispatch();

  const handleTextChange = (e: any) => {
    const val = e.target.value;
    setText(val);
    const styles = {
      buttonStyles: {
        text: val,
      },
    };
    dispatch(updateButtonStyles(selectedContentItem.id, styles));
  };

  const handleActionUrlChange = (e: any) => {
    const action = e.target.value;
    setActionUrl(action);
    const styles = {
      buttonStyles: {
        action,
      },
    };
    dispatch(updateButtonStyles(selectedContentItem.id, styles));
  };

  const handleTextColorChange = (e: any) => {
    const colorValue = e.target.value;
    setTextColor(colorValue);
    const styles = {
      buttonStyles: { color: colorValue },
    };
    dispatch(updateButtonStyles(selectedContentItem.id, styles));
  };

  const handleBgColorChange = (e: any) => {
    const colorValue = e.target.value;
    setBgColor(colorValue);
    const styles = {
      buttonStyles: { background: colorValue },
    };
    dispatch(updateButtonStyles(selectedContentItem.id, styles));
  };

  return (
    <AccordionDetails>
      <Box display="flex" flexDirection="column" width="100%">
        <TextField
          id="first outlined-start-adornment"
          sx={{ m: 1, width: "30ch" }}
          value={text}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">TEXT</InputAdornment>
            ),
          }}
          onChange={handleTextChange}
        />

        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            height: "3em",
            alignItems: "center",
            marginBottom: "8px",
          }}
        >
          <Typography>Color</Typography>
          <Box>
            <input
              type="color"
              value={textColor}
              onChange={handleTextColorChange}
            />
          </Box>
        </Box>

        <Divider />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            height: "3em",
            alignItems: "center",
            marginBottom: "8px",
          }}
        >
          <Typography>Background Color</Typography>
          <Box>
            <input
              type="color"
              value={bgColor}
              onChange={handleBgColorChange}
            />
          </Box>
        </Box>

        <Divider />

        <TextField
          id="outlined-start-adornment"
          sx={{ m: 1, width: "30ch" }}
          fullWidth
          value={actionUrl}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">URL</InputAdornment>
            ),
          }}
          onChange={handleActionUrlChange}
        />
      </Box>
    </AccordionDetails>
  );
};

export default StyleButton;
