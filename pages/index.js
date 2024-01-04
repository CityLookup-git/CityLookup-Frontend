import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [city, setCity] = useState('');
  const [streetNames, setStreetNames] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const fetchStreetNames = async () => {
    setStreetNames({});
    setErrorMessage('');

    try {
      const response = await fetch(`${apiUrl}/get_street_names?city=${city}`);
      const data = await response.json();
      if (data.error) {
        setErrorMessage(data.error); // Set the error message from the response
      } else {
        const groupedStreets = groupStreetsByFirstLetter(data.streets);
        setStreetNames(groupedStreets);
      }
    } catch (error) {
      console.error('There was a problem fetching the street names:', error);
      setErrorMessage(error.message);
    }
  };

  const groupStreetsByFirstLetter = (streets) => {
    return streets.reduce((acc, street) => {
      const firstLetter = street[0].toUpperCase();
      if (!acc[firstLetter]) {
        acc[firstLetter] = [];
      }
      acc[firstLetter].push(street);
      return acc;
    }, {});
  };

  const handleSearch = () => {
    if (city.trim() !== '') {
      fetchStreetNames();
    }
  };

  return (
    <div className={styles.App}>
        <h1 className={styles.title}>CityLookup</h1>
        <input
          className={styles.input}
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button className={styles.startButton} onClick={handleSearch}>Search</button>

        {errorMessage && <div className={styles.error}>{errorMessage}</div>}

        {Object.keys(streetNames).length > 0 && (
          <div className={styles.streetNames}>
            <p className={styles.streetTitle}>Street Names:</p>
            {Object.keys(streetNames).map(letter => (
              <div key={letter}>
                <p className={styles.streetLetter}>{letter}</p>
                {streetNames[letter].map((name, index) => <p className={styles.streetEntry} key={index}>{name}</p>)}
              </div>
            ))}
          </div>
        )}
    </div>
  );
}
