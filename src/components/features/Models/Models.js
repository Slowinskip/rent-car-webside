import React from "react";
import styles from "./Models.module.scss";
import { Col, Row } from "react-bootstrap";

const Models = () => {
  return (
    <div className={styles.modelContainer}>
      <div className={"col-12 " + styles.modelsTitle}>
        <h4>Vehicle Models</h4>
        <h3>Get to know our cars</h3>
        <p>
          In the interests of your safety, we check the technical condition of
          the car before each rental.
        </p>
      </div>
      <div className={styles.modelDetail}>
        <Col className={styles.modelBtn}>1</Col>
        <Col className={styles.modelImg}>2</Col>
        <Col className={styles.modelInfo}>3</Col>
      </div>
    </div>
  );
};

export default Models;
