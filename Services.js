import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Card, CardContent, Button } from "@mui/material";

const Services = () => {
  const [selectedCenter, setSelectedCenter] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCenter = localStorage.getItem("selectedCenter");
    if (storedCenter) {
      setSelectedCenter(JSON.parse(storedCenter));
    }
  }, []);

  if (!selectedCenter) {
    return <Typography variant="h5">No Service Center Selected</Typography>;
  }

  const services = [
    { name: "Car Wash", price: "₹500" },
    { name: "Bike Wash", price: "₹300" },
    { name: "Car Maintenance", price: "₹1500" },
    { name: "Bike Maintenance", price: "₹800" },
  ];

  const handleSelectService = (service) => {
    localStorage.setItem("selectedService", JSON.stringify(service));
    localStorage.setItem("selectedCenter", JSON.stringify(selectedCenter));

    navigate("/booking", {
      state: { service, serviceCenter: selectedCenter },
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>Services at {selectedCenter.name}</Typography>
      {services.map((service, index) => (
        <Card key={index} style={{ marginBottom: "15px" }}>
          <CardContent>
            <Typography variant="h6">{service.name}</Typography>
            <Typography>💰 Price: {service.price}</Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleSelectService(service)}
              style={{ marginTop: "10px" }}
            >
              Select Service
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Services;
