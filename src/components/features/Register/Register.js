import React, { useState } from "react";
import styles from "./Register.module.scss";
import { Alert, Container, Form } from "react-bootstrap";

const Register = () => {
  const [error, setError] = useState(false);

  return (
    <Container className={styles.container}>
      <div className={"col-xs-8 col-md-4 " + styles.registerDiv}>
        <h4>REGISTER</h4>
        {error ? (
          <Alert variant="danger" className="mt-3">
            <Alert.Heading>Something is wrong!</Alert.Heading>
            <p>Sorry, this option doesn't work yet </p>
          </Alert>
        ) : (
          ""
        )}
        <Form.Label className={styles.registerForm}>Email</Form.Label>
        <input className={styles.registerInput} type="text"></input>
        <Form.Label className={styles.registerForm}>Password</Form.Label>
        <input className={styles.registerInput} type="password"></input>
        <Form.Label className={styles.registerForm}>
          Confirm password
        </Form.Label>
        <input className={styles.registerInput} type="password"></input>

        <div className={styles.registerBtnDiv}>
          <a onClick={() => setError(!error)} className={styles.registerBtn}>
            Register
          </a>
          <a href="/login" className={styles.registerBtn}>
            Login
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Register;
