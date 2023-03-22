import React from "react";
import "./Country.css";

const Country = (props) => {
  const { name, flags, area, population } = props.country;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={flags.png} alt="country" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Name: {name.common}</h2>
        <p>Population: {population}</p>
        <p>Area: {area}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Show Details</button>
        </div>
      </div>
    </div>
  );
};

export default Country;
