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
        <Col className={"" + styles.opinionBox_col}>
          <p className="col-10">
            Duis sit amet ex velit. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Aenean lacinia tellus ut diam tempus lacinia.
            Cras elementum varius ligula a dignissim. Pellentesque iaculis
            interdum sem sit amet lacinia. Pellentesque convallis dolor id
            placerat tristique. Mauris aliquam erat sed metus mattis suscipit.
            Aliquam eget ultrices nunc.
          </p>
          <div className={styles.opinionAuthorDiv}>
            <img src="https://i.ibb.co/ZHbr5h2/person2.jpg" alt="img"></img>
            <h4>Adam Smidth</h4>
            <BsFillChatDotsFill className={styles.opinionIcon} />
          </div>
        </Col>
        <Col className={"" + styles.opinionBox_col}>
          <div className="col-10">
            <p className="">
              In a cursus leo, a varius enim. Nullam velit lorem, egestas in
              faucibus sit amet, ullamcorper ut dolor. Sed tincidunt ex at ante
              blandit vehicula. Nulla dui felis, mollis et quam vel, varius
              tincidunt ante. Nunc vel mi eu leo convallis auctor eu nec leo.
              Vestibulum congue sed nisl nec elementum.
            </p>
          </div>
          <div className={styles.opinionAuthorDiv}>
            <img src="https://i.ibb.co/qBkM3zc/person1.jpg" alt="img"></img>
            <h4>Samanta Dyson</h4>
            <BsFillChatDotsFill className={styles.opinionIcon} />
          </div>
        </Col>
      </Row>
    </div>
  );
};
