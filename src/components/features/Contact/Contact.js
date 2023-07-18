import React, { useState } from "react";
import { Alert, Container, Form } from "react-bootstrap";
import styles from "./Contact.module.scss";

const Contact = () => {
  const [error, setError] = useState(false);

  return (
    <Container className={styles.container}>
      <div className={"col-4 " + styles.contactForm}>
        <h4>Contact us</h4>
        {error === true && (
          <Alert variant="danger" className="mt-3">
            <Alert.Heading>Something is wrong!</Alert.Heading>
            <p>Sorry, this option doesn't work yet </p>
          </Alert>
        )}

        <Form.Label className={styles.contactForm}>Full Name</Form.Label>
        <input className={styles.contactInput} type="text"></input>
        <Form.Label className={styles.contactForm}>Email</Form.Label>
        <input className={styles.contactInput} type="text"></input>
        <Form.Group className={styles.contactInput_select}>
          <Form.Label>Choose a topic</Form.Label>
          <Form.Select>
            <option>Car rent</option>
            <option>Car return</option>
            <option>Other</option>
          </Form.Select>
        </Form.Group>
        <Form.Label className={styles.contactForm}>Message</Form.Label>
        <input className={styles.contactInput_textarea} type="textarea"></input>
        <button onClick={() => setError(!error)}>Submit</button>
      </div>
      <div className={"col-4 " + styles.contactImg}>
        <img alt="img" src="./image/peugeot-3008-suv-blue-2021.png"></img>
      </div>
    </Container>
  );
};

export default Contact;
