import { useState, useEffect } from "react";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import personService from "./services/personComms";
import personComms from "./services/personComms";
import Notification from "./components/Notification";

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
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />
      <div>
        <h2>add a new</h2>
        <PersonForm
          newName={newName}
          newNumber={newNumber}
          handleNameChange={handleNameChange}
          handleNumberChange={handleNumberChange}
          addPerson={addPerson}
        />
        <h2>Numbers</h2>
        <Persons persons={persons} handleDeletePerson={handleDeletePerson} />
      </div>
    </div>
  );
};

export default App;
