import React from "react";
import styles from "./Header.module.scss";
import { Container, Navbar } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { FaCarAlt } from "react-icons/fa";
const Header = () => {
  return (
    <Navbar>
      <Container className="py-3 d-flex">
        <Navbar.Brand className="d-flex">
          <FaCarAlt className={styles.navLogo} />
          <div className={styles.navTitle}>
            <span className={styles.spanRent}>Rent</span>
            <span className={styles.spanCar}>Car</span>
          </div>
        </Navbar.Brand>
        <NavbarCollapse className={"justify-content-center " + styles.navLink}>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Vehicle</a>
          <a href="">Contact</a>
        </NavbarCollapse>
        <div className={styles.navBnt}>
          <button href="" className={styles.loginBnt}>
            Login
          </button>
          <button href="" className={styles.registerBnt}>
            Register
          </button>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
