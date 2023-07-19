import React, { useState } from "react";
import styles from "./Header.module.scss";
import { Container, Navbar } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { FaCarAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [mobileMenu, setmobileMenu] = useState(false);
  window.addEventListener("resize", (e) => {
    setWidth(window.innerWidth);
  });

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
              <a href="/CarRent">Home</a>
              <a href="CarRent#about">About</a>
              <a href="CarRent#vehicle">Vehicle</a>
              <a href="/contact">Contact</a>
            </NavbarCollapse>
            <div className={styles.navBnt}>
              <a href="/login" className={styles.loginBnt}>
                Login
              </a>
              <a href="/register" className={styles.registerBnt}>
                Register
              </a>
            </div>
          </>
        ) : (
          <>
            <button
              onClick={() => setmobileMenu(!mobileMenu)}
              className={styles.btnMobileMenu}
            >
              <GiHamburgerMenu />
            </button>
          </>
        )}
        {mobileMenu ? (
          <div className={"col-12 " + styles.mobileMenu}>
            <a href="/CarRent">Home</a>
            <a href="CarRent#about">About</a>
            <a href="CarRent#vehicle">Vehicle</a>
            <a href="/contact">Contact</a>

            <a onClick={() => setmobileMenu(!mobileMenu)}>
              <AiOutlineClose className={styles.iconExit} />
            </a>
          </div>
        ) : (
          ""
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
