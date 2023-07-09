import React, { useState } from "react";
import styles from "./Header.module.scss";
import { Container, Dropdown, DropdownButton, Navbar } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { FaCarAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", (e) => {
    setWidth(window.innerWidth);
  });

  console.log(width);

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
        {width > 800 ? (
          <>
            <NavbarCollapse
              className={"justify-content-center " + styles.navLink}
            >
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
          </>
        ) : (
          <DropdownButton
            title={<GiHamburgerMenu />}
            id={`dropdown-button-down`}
            drop="start"
            variant="secondary"
            className={styles.dropDown}
          >
            <Dropdown.Item className={styles.dropItem} href="#/action-1">
              Home
            </Dropdown.Item>
            <Dropdown.Item className={styles.dropItem} href="#/action-2">
              About
            </Dropdown.Item>
            <Dropdown.Item className={styles.dropItem} href="#/action-3">
              Vehicle
            </Dropdown.Item>
            <Dropdown.Item className={styles.dropItem} href="#/action-3">
              Contact
            </Dropdown.Item>
            <Dropdown.Item className={styles.dropItem} href="#/action-3">
              Login
            </Dropdown.Item>
            <Dropdown.Item className={styles.dropItem} href="#/action-3">
              Register
            </Dropdown.Item>
          </DropdownButton>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
