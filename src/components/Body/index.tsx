import React, { useState } from "react";
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  TextField,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "react-color-palette/css";
import StyleText from "./StyleText";
import StyleGeneral from "./StyleGeneral";
import StyleButton from "./StyleButton";
import { StyleImage } from "./StyleImage";

const BodyTab: React.FC = () => {
  const [generalExpanded, setGeneralExpanded] = useState(true);
  const [textExpanded, setTextExpanded] = useState(false);
  const [buttonExpanded, setButtonExpanded] = useState(false);
  const [imageExpanded, setImageExpanded] = useState(false);
  const [linkExpanded, setLinkExpanded] = useState(false);

  const handleAccordionChange =
    (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
      switch (panel) {
        case "general":
          setGeneralExpanded(isExpanded);
          break;
        case "text":
          setTextExpanded(isExpanded);
          break;
        case "image":
          setImageExpanded(isExpanded);
          break;
        case "button":
          setButtonExpanded(isExpanded);
          break;
        case "link":
          setLinkExpanded(isExpanded);
          break;
        default:
          break;
      }
    };

  return (
    <Box>
      <Accordion
        expanded={generalExpanded}
        onChange={handleAccordionChange("general")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="general-content"
          id="general-header"
          sx={{ backgroundColor: "#f0f0f0" }}
        >
          <Typography>General</Typography>
        </AccordionSummary>
        <StyleGeneral />
      </Accordion>

      <Accordion
        expanded={textExpanded}
        onChange={handleAccordionChange("text")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="text-content"
          id="text-header"
          sx={{ backgroundColor: "#f0f0f0" }}
        >
          <Typography>Text</Typography>
        </AccordionSummary>
        <StyleText />
      </Accordion>

      <Accordion
        expanded={buttonExpanded}
        onChange={handleAccordionChange("button")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="button-content"
          id="button-header"
          sx={{ backgroundColor: "#f0f0f0" }}
        >
          <Typography>Button</Typography>
        </AccordionSummary>
       <StyleButton />
      </Accordion>

      <Accordion
        expanded={imageExpanded}
        onChange={handleAccordionChange("image")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="image-content"
          id="image-header"
          sx={{ backgroundColor: "#f0f0f0" }}
        >
          <Typography>Image</Typography>
        </AccordionSummary>
       <StyleImage />
      </Accordion>

      <Accordion
        expanded={linkExpanded}
        onChange={handleAccordionChange("link")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="link-content"
          id="link-header"
          sx={{ backgroundColor: "#f0f0f0" }}
        >
          <Typography>Social Connect</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box display="flex" flexDirection="column" width="100%">
            <TextField
              id="yt-link"
              label="YouTube Link"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: "8px" }}
            />

            <TextField
              id="fb-link"
              label="FB Link"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: "8px" }}
            />
            <TextField
              id="twitter-link"
              label="Twitter Link"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: "8px" }}
            />
            <TextField
              id="insta-link"
              label="Instagram Link"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: "8px" }}
            />
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default BodyTab;
