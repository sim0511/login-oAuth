import Alert from "@mui/material/Alert";
import Button from "../components/button";
import FormField from "../components/field";
import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Typography from "../components/typography";
import { loginUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginUser(username, password);
      navigate("/availability", { replace: true });
    } catch (error) {
      setOpen(true);
      setMessage(error.message);
      console.log("Error logging in:", error);
    }
  };

  const handleGoogleLogin = () => {
    console.log(process.env.GOOGLE_CLIENT_ID)
    const clientId = "1024595231493-t3o2dd6jojau5id9bpgk19lnimqf76n7.apps.googleusercontent.com";
    const redirectUri = "http://localhost:5000/api/v1/google-signin";
    const scope = "openid email profile"; // Include 'openid' for id_token
    const responseType = "code";
    const state = "some_random_state"; // Optional, for CSRF protection

    const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}&state=${state}`;

    window.location.href = googleAuthUrl;
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
          Login
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
          label="Login"
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
          }}
          onClick={handleLogin}
        />

        <Button
          label="Sign in with Google"
          backgroundColor="#4285F4"
          color="white"
          hoverColor="#357AE8"
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
          onClick={handleGoogleLogin}
        />

        <div style={{ marginTop: "1rem", display: "flex", justifyContent: "center" }}>
          <Typography size="small" color="white">
            Don't have an account?{" "}
            <span
              style={{
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={() => navigate("/register")}
            >
              Sign up
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

export default LoginForm;
