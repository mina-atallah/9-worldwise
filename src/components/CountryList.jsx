import { useCities } from "../context/CitiesContext";

import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";

function CountryList() {
  const { cities, isLoading } = useCities();

  // derived state
  const countries = cities.reduce((arr, city) => {
    /* 
    checking the current array if it's curr element has the same property value that the cities element got, 
    if not that means it's new or uinique and we return a new array with that element and the previous array
    */
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  console.log(countries);

  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add you first country by clicking on a country on the map" />
    );

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
