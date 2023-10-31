import React from "react";
import { Card, Button } from "react-bootstrap";
import "../index.css";

const Person = ({ person, deletePerson }) => {
  return (
    <Card className="transparent-card" color="dad7cd">
      <Card.Body>
        <Card.Title>{person.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {person.number}
        </Card.Subtitle>
        <Button variant="outline-secondary" onClick={deletePerson}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Person;
