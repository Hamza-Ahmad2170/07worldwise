import styles from "./assets/css/CountryItem.module.css";
import PropTypes from "prop-types";

// CountryItem.propTypes = {
//   country: PropTypes.shape({
//     cityName: PropTypes.string.isRequired,
//     country: PropTypes.string.isRequired,
//     emoji: PropTypes.string.isRequired,
//     date: PropTypes.string.isRequired,
//     notes: PropTypes.string.isRequired,
//     position: PropTypes.shape({
//       lat: PropTypes.number.isRequired,
//       lng: PropTypes.number.isRequired,
//     }),
//     id: PropTypes.number.isRequired,
//   }).isRequired,
// };

CountryItem.propTypes = {
  country: PropTypes.shape({
    country: PropTypes.string.isRequired,
    emoji: PropTypes.string.isRequired,
  }).isRequired,
};

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
