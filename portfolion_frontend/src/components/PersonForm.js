import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const PersonForm = (props) => {
  return (
    <div>
      <Row>
        <Col xs={8} sm={8} md={12} lg={8} xl={8}>
          <h3>Add a new number</h3>
          <Form onSubmit={props.addPerson}>
            <Form.Group className="mb-1">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                value={props.newName}
                onChange={props.handleNameChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
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
    </div>
  );
};

export default PersonForm;
