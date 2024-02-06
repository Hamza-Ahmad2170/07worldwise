import PropTypes from "prop-types";
import styles from "./assets/css/Button.module.css";

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  children: PropTypes.string.isRequired
};

function Button({ children, onClick, type }) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`} type={type}>
      {children}
    </button>
  );
}

export default Button;
