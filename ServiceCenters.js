import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Typography, Button } from "@mui/material";

const ServiceCenters = () => {
  const [serviceCenters, setServiceCenters] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/api/service-centers")
      .then(response => {
        setServiceCenters(response.data);
      })
      .catch(error => {
        console.error("Error fetching service centers:", error);
      });
  }, []);

  const handleSelectCenter = (center) => {
    localStorage.setItem("selectedCenter", JSON.stringify(center));
    navigate("/services");
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>Choose a Service Center</Typography>
      {serviceCenters.map((center, index) => (
        <Card key={index} style={{ marginBottom: "15px" }}>
          <CardContent>
            <Typography variant="h6">{center.name}</Typography>
            <Typography>📍 {center.address}, {center.city}</Typography>
            <Typography>⭐ Rating: {center.rating} | 📏 Distance: {center.distance} km</Typography>
            <Typography>🟢 {center.availability}</Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleSelectCenter(center)}
              style={{ marginTop: "10px" }}
            >
              Select Center
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ServiceCenters;
