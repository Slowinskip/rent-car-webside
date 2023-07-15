import React from "react";
import styles from "./MobileApp.module.scss";
import { Col, Row } from "react-bootstrap";
import { BsApple, BsGooglePlay } from "react-icons/bs";
const MobileApp = () => {
  return (
    <div className={styles.container}>
      <Row xs={1} md={2}>
        <Col className={styles.mobileText}>
          <h4>Get to know our application</h4>
          <p>
            In a ante dapibus, tempus urna eget, egestas eros. Quisque pulvinar
            vel odio quis eleifend. Ut consectetur tincidunt eros, laoreet
            faucibus eros facilisis eu. Donec luctus vestibulum aliquet. Donec
            in scelerisque augue, eget sodales mauris.
          </p>
          <div className={styles.mobileText_icon}>
            <BsApple />
            <BsGooglePlay />
          </div>
        </Col>
        <Col className={styles.mobileImage}>
          <img alt="img" src="./image/MobileBackground2.png"></img>
        </Col>
      </Row>
    </div>
  );
};

export default MobileApp;
