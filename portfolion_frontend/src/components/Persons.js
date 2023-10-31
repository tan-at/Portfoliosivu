import Person from "./Person";

const Persons = (props) => {
  return (
    <div>
      <h3>Numbers</h3>
      {props.persons.map((person) => (
        <Person
          key={person.id}
          person={person}
          deletePerson={props.handleDeletePerson(person.name, person.id)}
        />
      ))}
    </div>
  );
};

export default Persons;
