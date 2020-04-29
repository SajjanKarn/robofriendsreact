import React from "react";

const Card = ({ id, name, email }) => {
  return (
    <div className="pa3 tc bg-light-green shadow-3 dib grow ma3 br3">
      <img alt="img" src={`https://robohash.org/${id}.png?size=200x200`} />
      <h1 className="f-1">{name}</h1>
      <p>{email}</p>
    </div>
  );
};
export default Card;
