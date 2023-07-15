import React from "react";
import styles from "./MobileApp.module.scss";
import { Col, Row } from "react-bootstrap";
import { BsApple, BsGooglePlay } from "react-icons/bs";
const MobileApp = () => {
  return (
    <div className={styles.container}>
      <Row xs={1} md={2}>
        <Col className={"col-3 " + styles.mobileText}>
          <h2>Get to know our application</h2>
          <p>
            In a ante dapibus, tempus urna eget, egestas eros. Quisque pulvinar
            vel odio quis eleifend. Ut consectetur tincidunt eros, laoreet
            faucibus eros facilisis eu. Donec luctus vestibulum aliquet. Donec
            in scelerisque augue, eget sodales mauris.
          </p>
          <div className={styles.mobileText_iconBox}>
            <BsApple className={styles.icon} />
            <BsGooglePlay className={styles.icon} />
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
