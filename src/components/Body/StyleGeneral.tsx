import React, { useState } from "react";
import {
  Box,
  AccordionDetails,
  Typography,
  FormControl,
  Select,
  MenuItem,
  Tooltip,
  IconButton,
  Divider,
} from "@mui/material";
import "react-color-palette/css";
import {
  FormatAlignCenter,
  FormatAlignLeft,
  FormatAlignRight,
} from "@mui/icons-material";
import { useSelector } from "react-redux";
import { updateContentStyles, updateGeneralBgColor } from "../../actions/contentActions";
import { useDispatch } from "react-redux";

const StyleGeneral: React.FC = () => {
  const [selectedFontFamily, setSelectedFontFamily] = useState("arial");
  const [selectedFontWeight, setSelectedFontWeight] = useState("normal");
  const [textColor, setTextColor] = useState("#561ecb");
  const [bgColor, setBgColor] = useState("#561ecb");

  const dispatch = useDispatch();

  const contentItems = useSelector((state: any) => state.contents.contentItems);

  const handleTextColorChange = (e: any) => {
    const colorValue = e.target.value;
    setTextColor(colorValue);
    contentItems.forEach((item: any) => {
      dispatch(updateContentStyles(item.id, { color: colorValue }));
    });
  };

  const handleBgColorChange = (e: any) => {
    const colorValue = e.target.value;
    setBgColor(colorValue);
    dispatch(updateGeneralBgColor({ backgroundColor: colorValue }))
    contentItems.forEach((item: any) => {
      dispatch(updateContentStyles(item.id, { background: colorValue }));
    });
  };

  const handleAlignment = (alignment: string) => {
    const newStyles = {
      textAlign: alignment,
    };
    contentItems.forEach((item: any) => {
      dispatch(updateContentStyles(item.id, newStyles));
    });
  };

  const fontWeights = ["Normal", "Bold"];

  const handleWeightChange = (event: any) => {
    const newFontWeight = event.target.value;
    setSelectedFontWeight(newFontWeight);
    contentItems.forEach((item: any) => {
      dispatch(updateContentStyles(item.id, { fontWeight: newFontWeight }));
    });
  };

  const fontFamilies = ["Arial", "Times New Roman", "Verdana"];

  const handleFamilyChange = (event: any) => {
    const newFontFamily = event.target.value;
    setSelectedFontFamily(newFontFamily);
    contentItems.forEach((item: any) => {
      dispatch(updateContentStyles(item.id, { fontFamily: newFontFamily }));
    });
  };

  return (
    <AccordionDetails sx={{ padding: "16px" }}>
      <Box display="flex" flexDirection="column" width="100%">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            height: "3em",
            alignItems: "center",
            marginBottom: "8px",
          }}
        >
          <Typography>Text Color</Typography>
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

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            height: "3em",
            alignItems: "center",
            marginBottom: "8px",
          }}
        >
          <Typography>Content Alignment</Typography>
          <Box>
            <Tooltip title="Align Left">
              <IconButton
                onClick={() => {
                  handleAlignment("left");
                }}
              >
                <FormatAlignLeft />
              </IconButton>
            </Tooltip>
            <Tooltip title="Align Center">
              <IconButton
                onClick={() => {
                  handleAlignment("center");
                }}
              >
                <FormatAlignCenter />
              </IconButton>
            </Tooltip>
            <Tooltip title="Align Right">
              <IconButton
                onClick={() => {
                  handleAlignment("right");
                }}
              >
                <FormatAlignRight />
              </IconButton>
            </Tooltip>
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
          <Typography id="font-family-label">Font Family</Typography>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <Select
              labelId="font-family-label"
              id="font-family-select"
              value={selectedFontFamily}
              onChange={handleFamilyChange}
            >
              {fontFamilies.map((font) => (
                <MenuItem
                  key={font.toLocaleLowerCase()}
                  value={font.toLocaleLowerCase()}
                >
                  {font}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
          <Typography id="font-weight-label">Font Weight</Typography>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <Select
              labelId="font-weight-label"
              id="font-weight-select"
              value={selectedFontWeight}
              onChange={handleWeightChange}
              fullWidth
            >
              {fontWeights.map((weight) => (
                <MenuItem
                  key={weight.toLowerCase()}
                  value={weight.toLowerCase()}
                >
                  {weight}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
    </AccordionDetails>
  );
};

export default StyleGeneral;
