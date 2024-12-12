import React from "react";
import { Box, CssBaseline, Drawer, AppBar, Toolbar, Typography, Button, Avatar, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { FaCalendarAlt, FaClipboardList} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../config/constant";
const drawerWidth = 240;

const Layout = ({ children, userName="Guest", onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch(`${BASE_URL}/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' 
        },
        credentials:"include"
      });
      const res = await response.json();
      console.log(res)
      if (response.ok) {
        navigate('/login');
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('An error occurred during logout:', error);
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* Header */}
      <AppBar
        position="fixed"
        sx={{
          width: "100%",
          bgcolor: "#6e45e2",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
            HI
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="body1">{userName}</Typography>
            <Avatar sx={{ bgcolor: "#88d3ce" }}>{userName.charAt(0)}</Avatar>
            <Button
              variant="outlined"
              color="inherit"
              onClick={handleLogout}
              sx={{ borderColor: "white", color: "white" }}
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            bgcolor: "#f9f9f9",
          },
        }}
      >
        <Typography variant="h6" sx={{ textAlign: "center", mt: 2 }}>
          Scheduler App
        </Typography>
        <Box sx={{ overflow: "auto" }}>
          <List>
            {[
              { text: "Info", icon: <FaCalendarAlt />, route: "/log" },
              { text: "Availability", icon: <FaClipboardList />, route: "/availability" },
            ].map((item, index) => (
              <ListItem button key={index} sx={{ cursor: "pointer" }} onClick={() => navigate(item.route)}>
                <ListItemIcon sx={{ color: "#6e45e2" }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "#f4f4f4",
          p: 3,
          width: `calc(100% - ${drawerWidth}px)`,
          mt: 8,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
