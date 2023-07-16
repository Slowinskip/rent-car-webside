import React from "react";
import styles from "./Footer.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <Container>
      <Row xs={1} md={2} lg={4}>
        <Col className={styles.footerBox}>
          <h5>RENT CAR</h5>
          <p>
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs.
          </p>
          <h6>
            <BsFillTelephoneFill className={styles.footerBox_icon} />
            (123)-456-789
          </h6>
          <h6>
            <MdEmail className={styles.footerBox_icon} />
            rentcar@gmail.com
          </h6>
        </Col>
        <Col className={styles.footerBox}>
          <h5>COMPANY</h5>
          <h6>About Us</h6>
          <h6>Carrers</h6>
          <h6>Mobile</h6>
          <h6>Blog</h6>
          <h6>How we work</h6>
        </Col>
        <Col className={styles.footerBox}>
          <h5>WORKING HOURS</h5>
          <p>Mon- Fri: 9:00 - 18:00</p>
          <p>Sat: 9:00 - 19:00</p>
        </Col>
        <Col className={styles.footerBox}>
          {" "}
          <h5>SUBSCRIPTION</h5>
          <p>Subscribe your Email address for latest news & updates</p>
          <input type="email"></input>
          <button>1</button>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
