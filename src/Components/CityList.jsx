import useCities from "../hooks/useCities";

import styles from "./assets/css/CityList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import CityItem from "./CityItem";

function CityList() {
  const { isLoading, cities } = useCities();

  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
}

export default CityList;
