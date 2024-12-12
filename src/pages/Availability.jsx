import React, { useState } from "react";

import Button from "../components/button";
import Typography from "../components/typography";
import Layout from "../components/layout";

const AvailabilityPage = () => {
  const [selectedDates, setSelectedDates] = useState([]);
  const [savedAvailability, setSavedAvailability] = useState([]);
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(new Date(today.getFullYear(), today.getMonth()));

  // Generate days in a month
  const daysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const isPastDate = (day) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    return date < today.setHours(0, 0, 0, 0); // Compare without time
  };

  const toggleDate = (day) => {
    const dateString = new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toDateString();
    if (isPastDate(day)) return; // Prevent past dates
    setSelectedDates((prev) =>
      prev.includes(dateString)
        ? prev.filter((d) => d !== dateString) // Remove if already selected
        : [...prev, dateString] // Add if not selected
    );
  };

  const handleSaveAvailability = () => {
    if (selectedDates.length === 0) {
      alert("Please select at least one date.");
      return;
    }
    setSavedAvailability(selectedDates);
    setSelectedDates([]); // Clear selected dates
    alert("Availability saved!");
  };

  const handlePreviousMonth = () => {
    setCurrentDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1));
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const handleLogout = () => {
    console.log("Logout clicked");
  };
  return (
    <Layout userName="Simrandeep Kaur" onLogout={handleLogout}>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #88d3ce, #6e45e2)",
        padding: "2rem",
        color: "white",
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
          maxWidth: "500px",
        }}
      >
        <Typography
          size="xlarge"
          color="black"
          align="center"
          style={{ marginBottom: "1.5rem", fontWeight: "bold" }}
        >
          Select Your Availability
        </Typography>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <button
            onClick={handlePreviousMonth}
            style={{
              background: "none",
              border: "none",
              color: "black",
              cursor: "pointer",
              fontSize: "1.5rem",
            }}
          >
            {"<"}
          </button>
          <Typography size="large" color="black" align="center">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </Typography>
          <button
            onClick={handleNextMonth}
            style={{
              background: "none",
              border: "none",
              color: "black",
              cursor: "pointer",
              fontSize: "1.5rem",
            }}
          >
            {">"}
          </button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gap: "10px",
            marginBottom: "1rem",
          }}
        >
          {Array.from(
            { length: daysInMonth(currentDate.getFullYear(), currentDate.getMonth()) },
            (_, i) => {
              const day = i + 1;
              const isDisabled = isPastDate(day);
              const dateString = new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toDateString();
              const isSelected = selectedDates.includes(dateString);

              return (
                <div
                  key={day}
                  style={{
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "50%",
                    cursor: isDisabled ? "not-allowed" : "pointer",
                    backgroundColor: isSelected ? "rgba(255, 255, 255, 0.5)" : "transparent",
                    color: isDisabled ? "grey" : isSelected ? "black" : "white",
                    fontWeight: isSelected ? "bold" : "normal",
                  }}
                  onClick={() => !isDisabled && toggleDate(day)}
                >
                  {day}
                </div>
              );
            }
          )}
        </div>

        <Button
          label="Save Availability"
          backgroundColor="rgba(255, 255, 255, 0.5)"
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
            marginBottom: "1rem",
          }}
          onClick={handleSaveAvailability}
        />

        {savedAvailability.length > 0 && (
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              padding: "1rem",
              borderRadius: "8px",
              marginTop: "1rem",
              color: "black",
              maxHeight: "150px",
              overflowY: "auto",
              scrollbarWidth: "thin", // For Firefox
              scrollbarColor: "rgba(0, 0, 0, 0.5) transparent",
            }}
          >
            <Typography
              size="large"
              color="black"
              align="center"
              style={{ marginBottom: "0.5rem", fontWeight: "bold" }}
            >
              Saved Availability:
            </Typography>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {savedAvailability.map((date, index) => (
                <li key={index} style={{ textAlign: "center", marginBottom: "0.5rem" }}>
                  {date}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
    </Layout>
  );
};

export default AvailabilityPage;
