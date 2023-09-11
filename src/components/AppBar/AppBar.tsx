import * as React from "react";

// Material UI styled components
import Bar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

// Material UI icons
import MenuIcon from "@mui/icons-material/Menu";

const AppBar: React.FC = () => {
  return (
    <Bar position="fixed" sx={{ zIndex: 9999 }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Cafe Shop
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </Bar>
  );
};

export default AppBar;
