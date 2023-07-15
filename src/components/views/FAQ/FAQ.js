import React from "react";
import styles from "./FAQ.module.scss";
import { Col } from "react-bootstrap";

const FAQ = () => {
  return (
    <div className={styles.container}>
      <div className={styles.faqTitle}>
        <h4>FAQ</h4>
        <h3>Frequently Asked Questions</h3>
        <p>
          Before contacting us, please read the most frequently asked questions
        </p>
      </div>
      <div className={styles.questions}>
        <Col className={styles.questionBox}>
          <h5>
            Can I return the car in other places than at the company's
            headquarters?
          </h5>
          <p>
            Estibulum et odio posuere, dapibus est vitae, blandit arcu.
            Vestibulum ut lectus at risus convallis efficitur. Fusce at
            hendrerit metus. Morbi condimentum orci ac est convallis hendrerit.
            Mauris malesuada erat tellus.
          </p>
        </Col>
        <Col className={styles.questionBox}>
          <h5>When will the funds be debited from my account?</h5>
          <p>
            Nunc rutrum lacinia tortor, eget lobortis ex vestibulum eu. In
            sollicitudin nibh id ligula feugiat fringilla. Sed auctor convallis
            ex.
          </p>
        </Col>

        <Col className={styles.questionBox}>
          <h5>Is there a penalty for not returning the car on time?</h5>
          <p>
            Fusce tristique ligula ornare tortor tincidunt elementum eget vel
            diam. Ut ac enim vitae libero dignissim pretium. Vestibulum
            scelerisque pellentesque leo eu commodo. Vestibulum tempor quam sed
            velit tempus, sed pretium neque eleifend.
          </p>
        </Col>
      </div>
    </div>
  );
};

export default FAQ;
