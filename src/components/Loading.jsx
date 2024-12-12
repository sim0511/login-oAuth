import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

const Loading = ({ message = "Loading..." }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        bgcolor: "#f9f9f9",
        textAlign: "center",
      }}
    >
      <CircularProgress
        sx={{
          color: "#1976d2",
          mb: 2,
        }}
        size={60}
        thickness={4}
      />
      <Typography
        variant="body1"
        sx={{
          color: "#555",
          fontSize: "1.2rem",
        }}
      >
        {message}
      </Typography>
    </Box>
  );
};

export default Loading;
