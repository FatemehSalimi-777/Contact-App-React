import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <h1>Contact App</h1>
      <p>
        <a href="https://github.com/FatemehSalimi-777">GitHub.com</a> | Fatemeh Salimi-Web Developer
      </p>
    </div>
  );
}

export default Header;
