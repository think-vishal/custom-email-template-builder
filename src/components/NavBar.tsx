import { Button, Grid, Toolbar } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setViewType } from "../actions/viewActions";

const NavBar = () => {
  const [view, setView] = useState("desktop");

  const dispatch = useDispatch();

  const handleViewChange = (viewType: string) => {
    setView(viewType)
    dispatch(setViewType(viewType))
  }
  
  return (
    <Toolbar>
      <Grid container alignItems="center">
        <Grid item xs={2}>
          <img
            src={"https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?w=826&t=st=1704126567~exp=1704127167~hmac=720dfc84e5198f0bde48dfca18c1f4c79fc6ab3c12baab1670a611aacd454d59"}
            alt="Logo"
            style={{ height: "60px", marginLeft: "30px" }}
          />
        </Grid>
        <Grid item xs={10} container justifyContent="center" columnGap={2}>
          <Button
            variant={view === "desktop" ? "contained" : "outlined"}
            onClick={() => handleViewChange("desktop")}
          >
            Desktop
          </Button>
          <Button
            variant={view === "mobile" ? "contained" : "outlined"}
            onClick={() => handleViewChange("mobile")}
          >
            Mobile
          </Button>
        </Grid>
      </Grid>
    </Toolbar>
  );
};

export default NavBar;
