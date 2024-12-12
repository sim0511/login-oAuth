import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import { FaCalendarAlt, FaRegClock, FaTasks } from "react-icons/fa";

import Layout from "../components/layout";

// import endarPage from "../components/CalendarPage";


const Info = () => {
  const handleLogout = () => {
    console.log("Logout clicked");
  };
  return (
    <Layout userName="Simrandeep" onLogout={handleLogout}>
      <Box sx={{ flexGrow: 1, backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
        {/* Header */}

        {/* Hero Section */}
        <Box
          sx={{
            background: "linear-gradient(135deg, #6e45e2, #88d3ce)",
            color: "white",
            textAlign: "center",
            padding: "4rem 2rem",
          }}
        >
          <Typography
            variant="h2"
            sx={{ fontWeight: "bold", marginBottom: "1rem" }}
          >
            Make Every Minute Count
          </Typography>
          <Typography variant="h5" sx={{ marginBottom: "2rem" }}>
            Discover the power of scheduling and reclaim control over your time.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#ffffff",
              color: "#6e45e2",
              padding: "0.75rem 2rem",
              fontWeight: "bold",
              ":hover": { backgroundColor: "#f0f0f0" },
            }}
          >
            Get Started
          </Button>
        </Box>

        {/* Benefits Section */}
        <Container sx={{ marginTop: "4rem", marginBottom: "4rem" }}>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              marginBottom: "2rem",
            }}
          >
            Why Scheduling Matters
          </Typography>
          <Grid container spacing={4}>
            {/* Benefit 1 */}
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  textAlign: "center",
                  padding: "1.5rem",
                  borderRadius: "16px",
                }}
              >
                <Box
                  sx={{ fontSize: 50, color: "#6e45e2", marginBottom: "1rem" }}
                >
                  <FaRegClock />
                </Box>
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", marginBottom: "0.5rem" }}
                  >
                    Save Time
                  </Typography>
                  <Typography variant="body1">
                    Scheduling allows you to allocate time efficiently, ensuring
                    tasks are completed faster.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Benefit 2 */}
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  textAlign: "center",
                  padding: "1.5rem",
                  borderRadius: "16px",
                }}
              >
                <Box
                  sx={{ fontSize: 50, color: "#6e45e2", marginBottom: "1rem" }}
                >
                  <FaCalendarAlt />
                </Box>
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", marginBottom: "0.5rem" }}
                  >
                    Stay Organized
                  </Typography>
                  <Typography variant="body1">
                    Keep track of your priorities and never miss important
                    deadlines or events.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Benefit 3 */}
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  textAlign: "center",
                  padding: "1.5rem",
                  borderRadius: "16px",
                }}
              >
                <Box
                  sx={{ fontSize: 50, color: "#6e45e2", marginBottom: "1rem" }}
                >
                  <FaTasks />
                </Box>
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", marginBottom: "0.5rem" }}
                  >
                    Achieve Goals
                  </Typography>
                  <Typography variant="body1">
                    By planning your day, you can focus on what matters most and
                    achieve your objectives.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>

        {/* Call to Action */}
        <Box
          sx={{
            background: "linear-gradient(135deg, #88d3ce, #6e45e2)",
            color: "white",
            textAlign: "center",
            padding: "3rem 2rem",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", marginBottom: "1rem" }}
          >
            Start Scheduling Today
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "2rem" }}>
            Join countless others who have transformed their lives with better
            time management.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#ffffff",
              color: "#88d3ce",
              padding: "0.75rem 2rem",
              fontWeight: "bold",
              ":hover": { backgroundColor: "#f0f0f0" },
            }}
          >
            Sign Up Now
          </Button>
        </Box>
      </Box>
    </Layout>
  );
};

export default Info;
