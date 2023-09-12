import React from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import Dashboard from "../../Dashboard/Dashboard";
import Cafe from "../../Cafe/Cafe";
import Employee from "../../Employee/Employee";
import { Route, Routes } from "react-router-dom";
import DynamicBreadCrumbs from "../DynamicBreadCrumbs/DynamicBreadCrumbs";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const MainContent: React.FC = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <DynamicBreadCrumbs />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/cafe" element={<Cafe />} />
      </Routes>
    </Box>
  );
};

export default MainContent;
