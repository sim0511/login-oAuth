import Button from "./button";
import FormField from "./field";
import React from "react";
import Typography from "./typography";

const LoginForm = () => {
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
        {/* Login Header */}
        <Typography
          size="xlarge"
          color="white"
          align="center"
          style={{ marginBottom: "1.5rem", fontWeight: "bold" }}
        >
          Login
        </Typography>

        {/* Username Field */}
        <FormField
          placeholder="Username"
          labelSize="medium"
          labelColor="white"
          inputStyle={{
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            border: "none",
            color: "white",
            borderRadius:"20px",
            padding:"0.75rem"
          }}
        />

        {/* Password Field */}
        <FormField
          placeholder="Password"
          labelSize="medium"
          labelColor="white"
          inputStyle={{
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            border: "none",
            color: "white",
            borderRadius:"20px",
            padding:"0.75rem"
          }}
        />

        {/* Remember Me and Forgot Password */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "1rem 0",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent:"center", gap:".2rem" }}>
            <input type="checkbox"/>
            <label style={{color: "white", justifyItems:"flex-end'"}}>
              Remember me
            </label>
          </div>
          <Typography size="small" color="white" style={{ cursor: "pointer" }}>
            Forgot password?
          </Typography>
        </div>

        {/* Login Button */}
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
          onClick={() => alert("Login successful!")}
        />

        {/* Register Link */}
        <div style={{ marginTop: "1rem",display:"flex" , justifyContent:"center"}}>
          <Typography size="small" color="white">
            Don't have an account?{" "}
            <span
              style={{
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={() => alert("Redirect to Register!")}
            >
              Sign in
            </span>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
