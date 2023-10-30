import Person from "./Person";
import { Container, Row, Col } from "react-bootstrap";

const Persons = (props) => {
  return (
    <div>
      <Container>
        {props.persons.map((person) => (
          <Person
            key={person.id}
            person={person}
            deletePerson={props.handleDeletePerson(person.name, person.id)}
          />
        ))}
      </Container>
    </div>
  );
};

export default Persons;
