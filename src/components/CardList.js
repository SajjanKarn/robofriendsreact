import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((users, i) => {
        return (
          <Card
            name={users.name}
            id={users.id}
            email={users.email}
            key={users.id}
          />
        );
      })}
    </div>
  );
};

export default CardList;
