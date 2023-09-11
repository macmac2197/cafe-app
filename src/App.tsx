import React, { useState } from "react";
import { Box, CssBaseline } from "@mui/material";
import NavBar from "./components/Layout/NavBar/NavBar";
import SideBar from "./components/Layout/SideBar/SideBar";
import MainContent from "./components/Layout/MainContent/MainContent";

const App: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <NavBar open={open} toggleDrawer={toggleDrawer} />
      <SideBar open={open} toggleDrawer={toggleDrawer} />
      <MainContent />
    </Box>
  );
};

export default App;
