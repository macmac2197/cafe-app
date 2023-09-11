import React from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import Dashboard from "../../Dashboard/Dashboard";
import Cafe from "../../Cafe/Cafe";
import Employee from "../../Employee/Employee";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/employee",
    element: <Employee />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/cafe",
    element: <Cafe />,
    // errorElement: <ErrorPage />,
  },
]);

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
      <RouterProvider router={router} />
    </Box>
  );
};

export default MainContent;
