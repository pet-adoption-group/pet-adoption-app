// src/pages/PetCatalogue/PetCatalogue.js
import React, { useEffect, useState } from 'react';
import { Container, Card, Button, Row, Col, Spinner, Alert } from 'react-bootstrap';
import { fetchPets } from '../utils/api';  // Adjust the path based on location of the file


const PetCatalogue = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPets = async () => {
      try {
        const data = await fetchPets(); // Call the API function
        setPets(data);  // Set the pet data
      } catch (err) {
        setError('Error fetching pets');
      }
      setLoading(false);
    };

    getPets();
  }, []);

  if (loading) {
    return (
      <Container className="text-center">
        <Spinner animation="border" />
        <p>Loading pets...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container>
      <h2 className="my-4">Available Pets for Adoption</h2>
      <Row>
        {pets.map(pet => (
          <Col md={4} key={pet._id}>
            <Card className="mb-4">
              <Card.Img variant="top" src="dog2.png" alt={pet.name} />
              <Card.Body>
                <Card.Title>{pet.name}</Card.Title>
                <Card.Text>{pet.description}</Card.Text>
                <Button variant="primary">Adopt {pet.name}</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PetCatalogue;


