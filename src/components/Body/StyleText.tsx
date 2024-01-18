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
  Add,
  FormatAlignCenter,
  FormatAlignLeft,
  FormatAlignRight,
  Remove,
} from "@mui/icons-material";
import { useSelector } from "react-redux";
import { updateContentStyles } from "../../actions/contentActions";
import { useDispatch } from "react-redux";

const StyleText: React.FC = () => {
  const [contentWidth, setContentWidth] = useState(16);
  const [selectedFontFamily, setSelectedFontFamily] = useState("arial");
  const [selectedHeadingType, setSelectedHeadingType] = useState("h1");
  const [selectedFontWeight, setSelectedFontWeight] = useState("normal");
  const [textColor, setTextColor] = useState("#561ecb");

  const handleTextColorChange = (e: any) => {
    const colorValue = e.target.value;
    setTextColor(colorValue);
    dispatch(
      updateContentStyles(selectedContentItem.id, { color: colorValue })
    );
  };

  const selectedContentItem = useSelector(
    (state: any) => state.selectedContent.selectedContentItem
  );

  const dispatch = useDispatch();

  const headingTypes = ["H1", "H2", "H3", "H4"];

  const handleHeadingType = (event: any) => {
    console.log("heading: ", event.target.value);
    const selectedType: string = event.target.value;
    setSelectedHeadingType(selectedType);
    const headingStylesMap: any = {
      h1: {
        display: "block",
        fontSize: "2em",
        fontWeight: "bold",
      },
      h2: {
        display: "block",
        fontSize: "1.5em",
        fontWeight: "bold",
      },
      h3: {
        display: "block",
        fontSize: "1.17em",
        fontWeight: "bold",
      },
      h4: {
        display: "block",
        fontSize: "1em",
        fontWeight: "bold",
      },
    };
    const styles = headingStylesMap[selectedType];
    console.log("selectedContentItem: ", selectedContentItem);
    dispatch(updateContentStyles(selectedContentItem.id, styles));
  };

  const handleAlignment = (alignment: string) => {
    const newStyles = {
      textAlign: alignment,
    };
    dispatch(updateContentStyles(selectedContentItem.id, newStyles));
  };

  const fontWeights = ["Normal", "Bold"];

  const handleWeightChange = (event: any) => {
    const newFontWeight = event.target.value;
    setSelectedFontWeight(newFontWeight);
    dispatch(
      updateContentStyles(selectedContentItem.id, { fontWeight: newFontWeight })
    );
  };

  const fontFamilies = ["Arial", "Times New Roman", "Verdana"];

  const handleFamilyChange = (event: any) => {
    const newFontFamily = event.target.value;
    setSelectedFontFamily(newFontFamily);
    dispatch(
      updateContentStyles(selectedContentItem.id, { fontFamily: newFontFamily })
    );
  };

  const handleIncrement = () => {
    const newFontSize = contentWidth + 1;
    setContentWidth(newFontSize);
    dispatch(
      updateContentStyles(selectedContentItem.id, {
        fontSize: `${newFontSize}px`,
      })
    );
  };

  const handleDecrement = () => {
    if (contentWidth > 0) {
      const newFontSize = contentWidth - 1;
      setContentWidth(newFontSize);
      dispatch(
        updateContentStyles(selectedContentItem.id, {
          fontSize: `${newFontSize}px`,
        })
      );
    }
  };

  return (
    <AccordionDetails>
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
          <Typography id="heading-type-label">Heading Type</Typography>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <Select
              labelId="heading-type-label"
              id="heading-type-select"
              value={selectedHeadingType}
              onChange={handleHeadingType}
            >
              {headingTypes.map((type) => (
                <MenuItem
                  key={type.toLocaleLowerCase()}
                  value={type.toLocaleLowerCase()}
                >
                  {type}
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
          <Typography>Font Size</Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Tooltip title="Decrease Width">
              <IconButton onClick={handleDecrement}>
                <Remove />
              </IconButton>
            </Tooltip>
            <Typography variant="body2">{contentWidth}px</Typography>
            <Tooltip title="Increase Width">
              <IconButton onClick={handleIncrement}>
                <Add />
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
          <Typography>Alignment</Typography>
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
      </Box>
    </AccordionDetails>
  );
};

export default StyleText;
