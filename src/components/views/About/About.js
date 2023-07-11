import React from "react";
import styles from "./About.module.scss";
import { Col, Row } from "react-bootstrap";
import { BiUserVoice, BiSolidCarMechanic } from "react-icons/bi";
import { GiChoice } from "react-icons/gi";

const About = () => {
  return (
    <Row className={styles.aboutContainer}>
      <Col className={"col-12 " + styles.aboutTitleDiv}>
        <h4>Plan your trip!</h4>
        <h3>It's never been easier!</h3>
      </Col>
      <Row xs={1} md={2} lg={3} className={styles.aboutOptionDiv}>
        <Col className={styles.aboutOptionDiv_col}>
          <BiSolidCarMechanic className={styles.aboutIcon} />
          <h5 className={styles.aboutOptionTitle}>24/7 service</h5>
          <p className={styles.aboutOptionText}>
            We have 24/7 workshops across the country! One phone call is enough
            to fix the problem.
          </p>
        </Col>
        <Col className={styles.aboutOptionDiv_col}>
          <BiUserVoice className={styles.aboutIcon} />
          <h5 className={styles.aboutOptionTitle}>Our consultants</h5>
          <p className={styles.aboutOptionText}>
            Our consultants will help you in the smallest matters. Our helplines
            are open 24/7 so you will never be left alone with a problem!
          </p>
        </Col>
        <Col className={styles.aboutOptionDiv_col}>
          <GiChoice className={styles.aboutIcon} />
          <h5 className={styles.aboutOptionTitle}>Your choice</h5>
          <p className={styles.aboutOptionText}>
            Everything is an option. You choose what you need. No more rigid
            contracts and unnecessary costs!
          </p>
        </Col>
      </Row>
    </Row>
  );
};

export default About;
