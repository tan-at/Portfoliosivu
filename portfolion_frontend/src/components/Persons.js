import Person from "./Person";

const Persons = (props) => {
  return (
    <div>
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
