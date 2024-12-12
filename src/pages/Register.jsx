import React from "react";
import Button from "../components/button";
import FormField from "../components/field";
import Typography from "../components/typography";
import { registerUser } from "../services/authService";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerUser(username, email, password);
      navigate("/login", { replace: true });
    } catch (error) {
      setOpen(true);
      setMessage(error.message);
      console.log("Error registering:", error);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #6e45e2, #88d3ce)",
      }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(10px)",
          padding: "2rem",
          width: "100%",
          maxWidth: "400px",
          color: "white",
        }}
      >
        <Typography
          size="xlarge"
          color="white"
          align="center"
          style={{ marginBottom: "1.5rem", fontWeight: "bold" }}
        >
          Register
        </Typography>

        <FormField
          placeholder="Username"
          labelSize="medium"
          labelColor="white"
          inputStyle={{
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            border: "none",
            color: "white",
            borderRadius: "20px",
            padding: "0.75rem",
          }}
          onChange={(e) => setUsername(e.target.value)}
        />

        <FormField
          placeholder="Email"
          labelSize="medium"
          labelColor="white"
          type="email"
          inputStyle={{
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            border: "none",
            color: "white",
            borderRadius: "20px",
            padding: "0.75rem",
          }}
          onChange={(e) => setEmail(e.target.value)}
        />

        <FormField
          placeholder="Password"
          labelSize="medium"
          labelColor="white"
          type="password"
          inputStyle={{
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            border: "none",
            color: "white",
            borderRadius: "20px",
            padding: "0.75rem",
          }}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          label="Register"
          backgroundColor="white"
          color="black"
          hoverColor="#f0f0f0"
          typographySize="medium"
          border="none"
          borderRadius="20px"
          padding="0.75rem"
          style={{
            width: "100%",
            fontWeight: "bold",
            textTransform: "uppercase",
            marginTop: "1rem",
          }}
          onClick={handleRegister}
        />

        <div style={{ marginTop: "1rem", display: "flex", justifyContent: "center" }}>
          <Typography size="small" color="white">
            Already have an account?{" "}
            <span
              style={{
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </Typography>
        </div>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        sx={{ width: "400px", maxWidth: "600px" }}
      >
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default RegisterForm;