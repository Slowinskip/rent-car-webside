import React from "react";
import styles from "./Details.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { BsCashCoin } from "react-icons/bs";
import { AiOutlineIdcard, AiFillApple } from "react-icons/ai";

export const Details = () => {
  return (
    <div className={styles.detailContainer}>
      <div className={"col-12 " + styles.titleDiv}>
        <h1>Save the most with long-term removal</h1>
        <h4>
          <span>Discounts</span> for regular customers
        </h4>
      </div>
      <Container>
        <div className={styles.imageDiv}>
          <img
            className={styles.centerImg}
            src="./image/jeep2.png"
            alt="img"
          ></img>

          <Col className={"col-5 " + styles.imageDiv_col}>
            <img src="./image/audi.png" alt="img"></img>
          </Col>
          <Col className={"col-5 " + styles.imageDiv_col}>
            <img src="./image/merc.png" alt="img"></img>
          </Col>
        </div>
        <Row xs={1} md={2} className={styles.textDetailContainer}>
          <Col className={"col-12 " + styles.textCol_1}>
            <h5>Why us?</h5>
            <h4>The best value for money</h4>
            <p>
              Duis sit amet ex velit. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Aenean lacinia tellus ut diam tempus lacinia.
              Cras elementum varius ligula a dignissim. Pellentesque iaculis
              interdum sem sit amet lacinia.
            </p>
          </Col>
          <Col className={"col-12 " + styles.textCol_2}>
            <div className={"col-12 " + styles.textCol_2__}>
              <div className={"col-5 " + styles.icon}>
                <BsCashCoin />
              </div>
              <div className={"col-6 " + styles.description}>
                <h5>Cashless payment</h5>
                <p>
                  Sed leo erat, bibendum a nisl eget, molestie blandit orci.
                  Maecenas faucibus odio ac augue eleifend, eget ullamcorper est
                  bibendum.
                </p>
              </div>
            </div>
            <div className={"col-12 " + styles.textCol_2__}>
              <div className={"col-5 " + styles.icon}>
                <AiOutlineIdcard />
              </div>
              <div className={"col-6 " + styles.description}>
                {" "}
                <h5>All you need is an ID or passport</h5>
                <p>
                  Etiam vitae metus ultrices, venenatis purus non, bibendum
                  felis.
                </p>
              </div>
            </div>
            <div className={"col-12 " + styles.textCol_2__}>
              <div className={"col-5 " + styles.icon}>
                <AiFillApple />
              </div>
              <div className={"col-6 " + styles.description}>
                {" "}
                <h5>Mobile app available</h5>
                <p>
                  Sed at metus venenatis, fringilla ex eu, luctus lorem.
                  Maecenas dignissim, velit nec vulputate eleifend.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
