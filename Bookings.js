import React, { useEffect, useState } from "react";
import { Typography, Card, CardContent, Button } from "@mui/material";

const Bookings = () => {
  const [selectedCenter, setSelectedCenter] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const storedCenter = localStorage.getItem("selectedCenter");
    const storedService = localStorage.getItem("selectedService");

    if (storedCenter) setSelectedCenter(JSON.parse(storedCenter));
    if (storedService) setSelectedService(JSON.parse(storedService));
  }, []);

  if (!selectedCenter || !selectedService) {
    return <Typography variant="h5">No Service or Center Selected</Typography>;
  }

  const handleConfirmBooking = () => {
    alert(`Booking confirmed for ${selectedService.name} at ${selectedCenter.name}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>Booking Confirmation</Typography>
      <Card>
        <CardContent>
          <Typography variant="h6">Service: {selectedService.name}</Typography>
          <Typography>💰 Price: {selectedService.price}</Typography>
          <Typography>📍 Center: {selectedCenter.name}, {selectedCenter.city}</Typography>
          <Button
            variant="contained"
            color="success"
            onClick={handleConfirmBooking}
            style={{ marginTop: "15px" }}
          >
            Confirm Booking
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Bookings;
