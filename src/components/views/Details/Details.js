import React from "react";
import styles from "./Details.module.scss";
import { Col, Container } from "react-bootstrap";
export const Details = () => {
  return (
    <div className={styles.detailContainer}>
      <div className={"col-12 " + styles.titleDiv}>
        <h1>1</h1>
        <h4>2</h4>
      </div>
      <Container>
        <div className={styles.imageDiv}>
          <img alt="img"></img>
          <Col className="col-4">1</Col>
          <Col className="col-4">2</Col>
        </div>
        <div className={styles.imageDiv}>
          <Col className="col-6">1</Col>
          <Col className="col-6">1</Col>
        </div>
      </Container>
    </div>
  );
};
