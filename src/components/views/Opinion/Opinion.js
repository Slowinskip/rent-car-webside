import React from "react";
import styles from "./Opinion.module.scss";
import { Col, Row } from "react-bootstrap";
import { BsFillChatDotsFill } from "react-icons/bs";

export const Opinion = () => {
  return (
    <div className={styles.container}>
      <div className={styles.opinionTitle}>
        <h4>Recommended by many</h4>
        <h3>Customers opinion</h3>
        <p>
          We make a lot of effort to satisfy our customers. See what others say
          about us
        </p>
      </div>
      <Row className={styles.opinionBox} xs={1} md={2}>
        <Col className={styles.opinionBox_col}>
          <p className="col-12">p</p>
          <div>
            <img alt="img"></img>
            <h6>1</h6>
            <BsFillChatDotsFill />
          </div>
        </Col>
        <Col className={styles.opinionBox_col}>
          <p className="col-12">p</p>
          <div>
            <img alt="img"></img>
            <h6>1</h6>
            <BsFillChatDotsFill />
          </div>
        </Col>
      </Row>
    </div>
  );
};
