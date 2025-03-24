import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Container className="mt-5">
            <Row className="text-center">
                <Col>
                    <h1>E-Wash - Eco-Friendly Car & Bike Wash</h1>
                    <p className="lead">Find the best eco-friendly wash services near you.</p>
                    <Link to="/services">
                        <Button variant="primary">Explore Services</Button>
                    </Link>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md={4}>
                    <Card className="shadow">
                        <Card.Body>
                            <Card.Title>Eco-Friendly</Card.Title>
                            <Card.Text>Water-efficient and biodegradable cleaning solutions.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="shadow">
                        <Card.Body>
                            <Card.Title>Convenient</Card.Title>
                            <Card.Text>Book a service online and track your appointment live.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="shadow">
                        <Card.Body>
                            <Card.Title>Affordable</Card.Title>
                            <Card.Text>Get the best service at an affordable price.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
