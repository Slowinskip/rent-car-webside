import React from "react";
import styles from "./Models.module.scss";
import { Col, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Models = () => {
  const cars = useSelector((store) => store.cars.car);
  return (
    <Row className={styles.modelContainer}>
      <div className={"col-7 " + styles.modelsTitle}>
        <h4>Vehicle Models</h4>
        <h3>Get to know our cars</h3>
        <p>
          In the interests of your safety, we check the technical condition of
          the car before each rental.
        </p>
      </div>
      <Row className={" " + styles.modelDetail}>
        <Col className={"col-12 col-md-6 col-lg-4 " + styles.modelBtn}>
          {cars.map((car) => (
            <Col>
              <button>{car.model}</button>
            </Col>
          ))}
        </Col>
        <Col className={"col-12 col-md-6 col-lg-4 " + styles.modelImg}>
          {" "}
          <img
            alt="img"
            src="./image/mb-e-class-4d-blue-2021_preview_rev_1.png"
          ></img>
        </Col>
        <Col className={"col-12 col-md-6 col-lg-4 " + styles.modelInfo}>
          <Col className={"col-12 " + styles.modelPrice}>
            <h5>
              <span>$</span> / per day
            </h5>
          </Col>
          <Col className={"col-12 " + styles.modelSpec}>
            <div>
              <h5>Model:</h5>
            </div>
            <div>
              <h5>?</h5>
            </div>
          </Col>
          <Col className={"col-12 " + styles.modelSpec}>
            <div>
              <h5>Mark:</h5>
            </div>
            <div>
              <h5>?</h5>
            </div>
          </Col>
          <Col className={"col-12 " + styles.modelSpec}>
            <div>
              <h5>Year:</h5>
            </div>
            <div>
              <h5>?</h5>
            </div>
          </Col>
          <Col className={"col-12 " + styles.modelSpec}>
            <div>
              <h5>Chest</h5>
            </div>
            <div>
              <h5>?</h5>
            </div>
          </Col>
        </Col>
      </Row>
    </Row>
  );
};

export default Models;
