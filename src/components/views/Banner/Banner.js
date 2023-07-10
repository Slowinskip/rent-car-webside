import React from "react";
import styles from "./Banner.module.scss";
import { Col, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <Row>
      <Col>
        <h4>Plan your trip now</h4>
        <h1>
          Save <span>big</span> with our car rental
        </h1>
        <div>
          <button>1</button>
          <button>2</button>
        </div>
      </Col>
      <Col>
        <img alt="img" src="./image/peugeot-3008-suv-blue-2021.png"></img>
      </Col>
    </Row>
  );
};

export default Banner;
