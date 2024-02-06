import styles from "./assets/css/Footer.module.css"

function Footer() {
  return (
    <footer className={styles.footer}>
    <p className={styles.copyright}>
      &copy; CopyRight {new Date().getFullYear()} by WorldWise Inc.
    </p>
  </footer>
  )
}

export default Footer