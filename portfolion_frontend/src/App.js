import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import personService from "./services/personComms";
import personComms from "./services/personComms";
import Notification from "./components/Notification";
import CustomNavbar from "./components/Navbar";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    personService.getAll().then((response) => {
      setPersons(response);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };
    if (persons.filter((person) => person.name === newName).length > 0) {
      window.alert(`${newName} is already added to phonebook`);
    } else {
      personComms
        .create(personObject)
        .then((returnedPerson) => {
          setPersons(persons.concat(returnedPerson));
          setErrorMessage(`${newName} was added to the phonebook`);
          setNewName("");
          setNewNumber("");
        })
        .catch((error) => {
          window.alert(`${error.response.data.error}`);
          console.log(error.response.data);
        });
    }
  };

  const handleDeletePerson = (name, id) => {
    return () => {
      if (window.confirm(`Really delete ${name}?`)) {
        personComms
          .deletePerson(id)
          .then(() => {
            setPersons(persons.filter((n) => n.id !== id));
            setErrorMessage(`${name} was deleted`);
            setNewName("");
            setNewNumber("");
          })
          .catch((error) => {
            setPersons(persons.filter((n) => n.name !== name));
            setErrorMessage(
              `the user "${name}" has already been deleted from server`
            );
          });
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      }
    };
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div className="background_main">
      <Container fluid>
        <Row>
          <Col>
            <CustomNavbar />
          </Col>
        </Row>
        <section className="background2">
          <Container>
            <Row className="align-items-center justify-content-between">
              <Col md className="p-5">
                <h2>Atte Tanskanen</h2>
                <p className="lead">Howdy there!</p>
                <p>
                  I'm Atte. I'm studying computer science as my master's at
                  Tampere University with software engineering as my major.
                </p>
                <p>
                  You can find some of my projects below. If you want to check
                  my Linkedin or have a look at my GitHub for more of my
                  projects, you can find links to those at the bottom of the
                  page.
                </p>
              </Col>
              <Col md className="centered-container">
                <img
                  src="https://media.licdn.com/dms/image/D4D03AQFOFXd5VKSFHA/profile-displayphoto-shrink_200_200/0/1664628875764?e=1704326400&v=beta&t=-8oZAbzMH6PUpgAABwz8hdU9TQMqUszCM8dIZ6-5G7A"
                  fluid
                  alt=""
                  className="rounded-circle"
                />
              </Col>
            </Row>
          </Container>
        </section>
        <section id="CRUD-app" className="background1">
          <Container className="align-items-center justify-content-between">
            <Row>
              <Col md className="p-5">
                <h2>CRUD-Phonebook</h2>
                <p>
                  This is a fully CRUD functional app communicating with a
                  <strong> MongoDB</strong> database using
                  <strong> Mongoose</strong>. The frontend is made with
                  <strong> React</strong> utilizing <strong> JavaScript</strong>
                  , <strong> CSS</strong> and a <strong> Bootstrap </strong>
                  library.
                </p>
                <p>
                  I ended up making this wanting to see what I could do with
                  what I'd learned during my university courses and the GitHub
                  projects I've maded during my freetime.
                </p>
                <p>
                  With the form below you can add a new user to the database. It
                  will then show the user to you next to the form. The info you
                  input to the form will persists in the database, so it will
                  still be here the next time you come here. Give it a go : )
                </p>
                <Notification message={errorMessage} />
                <PersonForm
                  newName={newName}
                  newNumber={newNumber}
                  handleNameChange={handleNameChange}
                  handleNumberChange={handleNumberChange}
                  addPerson={addPerson}
                />
              </Col>
              <Col md className="p-5">
                <Persons
                  persons={persons}
                  handleDeletePerson={handleDeletePerson}
                />
              </Col>
            </Row>
          </Container>
        </section>
        <section id="Contact" className="background2">
          <Container className="centered-container">
            <Row className="align-items-center justify-content-between">
              <Col md className="px-5 py-4">
                <a href="https://www.linkedin.com/in/atte-tanskanen/">
                  <img
                    src="https://raw.githubusercontent.com/gauravghongde/social-icons/master/PNG/Color/LinkedIN.png"
                    alt="LinkedIn"
                    width="40"
                    height="40"
                  />
                </a>
                <a href="https://github.com/tan-at">
                  <img
                    src="https://raw.githubusercontent.com/gauravghongde/social-icons/master/PNG/Color/Github.png"
                    alt="GitHub"
                    width="40"
                    height="40"
                    style={{ marginLeft: "20px" }}
                  />
                </a>
              </Col>
            </Row>
          </Container>
        </section>
      </Container>
    </div>
  );
};

export default App;
