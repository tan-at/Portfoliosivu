import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const PersonForm = (props) => {
  return (
    <Container>
      <Row>
        <Col xs={8} sm={8} md={8}>
          <h2>Add a new number</h2>
          <Form onSubmit={props.addPerson}>
            <Form.Group>
              <Form.Label>Name:</Form.Label>
              <Form.Control
                value={props.newName}
                onChange={props.handleNameChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Number:</Form.Label>
              <Form.Control
                value={props.newNumber}
                onChange={props.handleNumberChange}
              />
            </Form.Group>
            <Button variant="outline-secondary" type="submit">
              Add
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default PersonForm;
