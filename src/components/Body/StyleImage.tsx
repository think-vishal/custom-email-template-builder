import {
  AccordionDetails,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateImageUrl } from "../../actions/imageActions";

export const StyleImage = () => {
  const [file, setFile] = useState("");
  const [url, setUrl] = useState("");

  const dispatch = useDispatch();

  const handleFileUpload = (e: any) => {
    const val = e.target.files[0];
    console.log("val: ", val);
    console.log(URL.createObjectURL(val));
    setFile(val);

    dispatch(updateImageUrl(URL.createObjectURL(val)));
  };

  const handleUrlChange = (e: any) => {
    const val = e.target.value;
    setUrl(val);
    dispatch(updateImageUrl(val));
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
          <Typography>Choose File</Typography>
          <Box>
            <input type={"file"} onChange={handleFileUpload} />
          </Box>
        </Box>

        <Divider />

        <TextField
          id="image-url"
          label="Image URL"
          variant="outlined"
          value={url}
          fullWidth
          sx={{ marginBottom: "8px" }}
          onChange={handleUrlChange}
        />
      </Box>
    </AccordionDetails>
  );
};
