import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        bgcolor: "#f9f9f9",
        textAlign: "center",
        padding: 2,
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "4rem", sm: "6rem" },
          fontWeight: 700,
          color: "#1976d2",
        }}
      >
        404
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontSize: { xs: "1.25rem", sm: "1.5rem" },
          fontWeight: 400,
          color: "#555",
          mb: 3,
        }}
      >
        The page you're looking for doesn’t exist.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{
          textTransform: "none",
          borderRadius: 2,
          fontSize: "1rem",
          paddingX: 4,
        }}
        onClick={handleGoHome}
      >
        Go Back Home
      </Button>
    </Box>
  );
};

export default NotFound;
