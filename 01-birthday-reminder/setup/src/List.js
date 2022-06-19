import React from "react";
import Person from "./Person";

const List = (props) => {
  const mappedPeople = props.people.map((person) => {
    return <Person key={person.id} {...person} />;
  });

  return <>{mappedPeople}</>;
};

export default List;
