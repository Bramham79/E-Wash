import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Typography, Button, TextField, Card, CardContent } from "@mui/material";

const BookingForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { service, serviceCenter } = location.state || {};

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [error, setError] = useState("");

  if (!service || !serviceCenter) {
    console.error("Service or Service Center details missing. Redirecting...");
    navigate("/services");
    return null;
  }

  const handleConfirmBooking = () => {
    if (!date || !time) {
      setError("❌ Please select both Date and Time before confirming.");
      return;
    }

    const bookingDetails = { service, serviceCenter, date, time };
    localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));

    console.log("✅ Booking Confirmed! Redirecting...");
    navigate("/dashboard");
  };

  return (
    <div style={styles.container}>
      <Card style={styles.card}>
        <CardContent>
          <Typography variant="h4" style={styles.heading}>Confirm Booking</Typography>
          <Typography variant="h6" style={styles.text}><strong>Service:</strong> {service.name}</Typography>
          <Typography style={styles.text}><strong>💰 Price:</strong> {service.price}</Typography>
          <Typography style={styles.text}><strong>📍 Service Center:</strong> {serviceCenter.name}</Typography>

          <TextField
            label="Select Date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            fullWidth
            style={styles.input}
            InputLabelProps={{ shrink: true }}
          />

          <TextField
            label="Select Time"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            fullWidth
            style={styles.input}
            InputLabelProps={{ shrink: true }}
          />

          {error && <Typography style={styles.error}>{error}</Typography>}

          <Button
            variant="contained"
            color="primary"
            onClick={handleConfirmBooking}
            style={styles.button}
          >
            Confirm Booking
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

// **💡 Custom CSS Styles**
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  },
  card: {
    width: "400px",
    padding: "20px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    backgroundColor: "#ffffff",
  },
  heading: {
    textAlign: "center",
    color: "#333",
    marginBottom: "20px",
  },
  text: {
    fontSize: "16px",
    marginBottom: "10px",
    color: "#555",
  },
  input: {
    marginTop: "15px",
    backgroundColor: "#fff",
  },
  error: {
    color: "red",
    fontSize: "14px",
    marginTop: "10px",
    textAlign: "center",
  },
  button: {
    marginTop: "20px",
    width: "100%",
    padding: "10px",
    fontSize: "16px",
  },
};

export default BookingForm;
