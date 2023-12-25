import React,{useState,useEffect} from 'react'

import CountryList from './CountryList'
import Search from './Search'

import "./Style.css"

const url = "https://restcountries.com/v3.1/all";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setFilteredCountries(data);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  const handleRemoveCountry = (name) => {
    const filter = filteredCountries.filter(
      (country) => country.name.common !== name
    );
    setFilteredCountries(filter);
  };

  const handleSearch = (searchValue) => {
    let value = searchValue.toLowerCase();
    const newCountries = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value);
    });
    setFilteredCountries(newCountries);
    console.log(filteredCountries)
  };

  return (
    <>
      <h1>Country App</h1>
      <Search onSearch={handleSearch} />
      {isLoading && <h2 className='loading'>Loading...</h2>}
      {error && <h2>{error.message}</h2>}
      {countries && (
        <CountryList
        countries={filteredCountries}
          onRemoveCountry={handleRemoveCountry}
        />
      )}
    </>
  );

}
