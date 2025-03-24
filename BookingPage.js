import React, { useState, useEffect } from 'react';
import { bookService, fetchServiceCenters } from '../api';
import { useNavigate } from 'react-router-dom';
import { Container, Button, Select, MenuItem, Typography } from '@mui/material';

const BookingPage = () => {
    const [services, setServices] = useState([]);
    const [selectedService, setSelectedService] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const loadServices = async () => {
            const { data } = await fetchServiceCenters();
            setServices(data);
        };
        loadServices();
    }, []);

    const handleBooking = async () => {
        if (!selectedService) return alert("Select a service center!");
        try {
            const { data } = await bookService({ serviceId: selectedService });
            alert("Booking confirmed!");
            navigate(`/track/${data.bookingId}`);
        } catch (error) {
            alert("Booking failed.");
        }
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4">Book a Service</Typography>
            <Select fullWidth value={selectedService} onChange={(e) => setSelectedService(e.target.value)}>
                {services.map(service => (
                    <MenuItem key={service._id} value={service._id}>{service.name}</MenuItem>
                ))}
            </Select>
            <Button variant="contained" color="primary" fullWidth onClick={handleBooking}>Book Now</Button>
        </Container>
    );
};

export default BookingPage;
