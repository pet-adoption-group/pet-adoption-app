import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import axios from 'axios';



function UserDashboard() {
  const [user, setUser] = useState(null);  // Store user data
  const [adoptedPets, setAdoptedPets] = useState([]);  // Store adopted pets
  const [appointments, setAppointments] = useState([]);  // Store appointment data

  useEffect(() => {
    // Fetch user details, adopted pets, and appointments when component loads
    const fetchUserDetails = async () => {
      try {
        const { data: userData } = await axios.get('/api/users/profile');  // Fetch user profile
        const { data: petsData } = await axios.get('/api/users/adopted-pets');  // Fetch adopted pets
        const { data: appointmentsData } = await axios.get('/api/users/appointments');  // Fetch appointments
        
        setUser(userData);
        setAdoptedPets(petsData);
        setAppointments(appointmentsData);
      } catch (err) {
        console.error('Error fetching user details:', err);
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <Container>
      <h2 className="my-4">User Dashboard</h2>

      {user ? (
        <Row>
          {/* User Profile Section */}
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Welcome, {user.name}</Card.Title>
                <Card.Text>
                  <strong>Email:</strong> {user.email}<br />
                  <strong>Phone:</strong> {user.phone}
                </Card.Text>
                <Button variant="primary" onClick={() => alert('Edit Profile')}>Edit Profile</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Adopted Pets Section */}
          <Col md={4}>
            <h3>Adopted Pets</h3>
            {adoptedPets.length ? (
              <ListGroup>
                {adoptedPets.map(pet => (
                  <ListGroup.Item key={pet._id}>
                    <strong>{pet.name}</strong> - {pet.species} ({pet.age} years old)
                  </ListGroup.Item>
                ))}
              </ListGroup>
            ) : (
              <p>You haven't adopted any pets yet.</p>
            )}
          </Col>

          {/* Appointments Section */}
          <Col md={4}>
            <h3>Upcoming Appointments</h3>
            {appointments.length ? (
              <ListGroup>
                {appointments.map(appt => (
                  <ListGroup.Item key={appt._id}>
                    <strong>{appt.petName}</strong> - {appt.date} at {appt.time}
                    <Button variant="link" onClick={() => alert('Cancel Appointment')}>Cancel</Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            ) : (
              <p>No upcoming appointments.</p>
            )}
          </Col>
        </Row>
      ) : (
        <p>Loading user details...</p>
      )}
    </Container>
  );
}

export default UserDashboard;
