import React from "react";
import styles from "./About.module.scss";
import { Col, Row } from "react-bootstrap";
import { BiUserVoice, BiSolidCarMechanic } from "react-icons/bi";
import { GiChoice } from "react-icons/gi";

const About = () => {
  return (
    <Row className={styles.aboutContainer}>
      <Col className={styles.aboutTitleDiv}>
        <h4>Plan your trip!</h4>
        <h3>It's never been easier!</h3>
      </Col>
      <div className={styles.aboutOptionDiv}>
        <Col>
          <BiSolidCarMechanic />
          <h5>24/7 service</h5>
          <p>
            We have 24/7 workshops across the country! One phone call is enough
            to fix the problem.
          </p>
        </Col>
        <Col>
          <BiUserVoice />
          <h5>Our consultants</h5>
          <p>
            Our consultants will help you in the smallest matters. Our helplines
            are open 24/7 so you will never be left alone with a problem!
          </p>
        </Col>
        <Col>
          <GiChoice />
          <h5>Your choice</h5>
          <p>
            Everything is an option. You choose what you need. No more rigid
            contracts and unnecessary costs!
          </p>
        </Col>
      </div>
    </Row>
  );
};

export default About;
