import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div className="container mx-auto">
      <h2 className="font-bold text-3xl my-3">
        Welcome to my rest Countries!!!
      </h2>
      <h3 className="font-semibold text-2xl">
        Available Countries: {countries.length}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {countries.map((country) => (
          <Country country={country} key={country.cca2}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
