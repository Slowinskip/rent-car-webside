import React, { useState } from "react";
import styles from "./Header.module.scss";
import { Container, Dropdown, DropdownButton, Navbar } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { FaCarAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiMenuFoldFill } from "react-icons/ri";
const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [mobileMenu, setmobileMenu] = useState(false);
  console.log(mobileMenu);
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
          <>
            <button
              onClick={() => setmobileMenu(!mobileMenu)}
              className={styles.btnMobileMenu}
            >
              {mobileMenu ? <RiMenuFoldFill /> : <GiHamburgerMenu />}
            </button>
            {mobileMenu ? (
              <div className={"col-4 " + styles.mobileMenu}>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Vehicle</a>
                <a href="">Contact</a>
              </div>
            ) : (
              ""
            )}
          </>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
