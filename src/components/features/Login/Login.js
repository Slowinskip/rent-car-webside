import React, { useState } from "react";
import styles from "./Login.module.scss";
import { Alert, Container, Form } from "react-bootstrap";

const Login = () => {
  const [error, setError] = useState(false);

  return (
    <Container className={styles.container}>
      <div className={"col-xs-8 col-md-4 " + styles.loginDiv}>
        <h4>LOGIN</h4>
        {error === true && (
          <Alert variant="danger" className="mt-3">
            <Alert.Heading>Something is wrong!</Alert.Heading>
            <p>
              The date has not been selected or the pick-up date cannot be
              before the start date
            </p>
          </Alert>
        )}

        <Form.Label className={styles.loginForm}>Email</Form.Label>
        <input className={styles.loginInput} type="text"></input>
        <Form.Label className={styles.loginForm}>Password</Form.Label>
        <input className={styles.loginInput} type="password"></input>
        <div className={styles.loginBtnDiv}>
          <a onClick={() => setError(!error)} className={styles.loginBtn}>
            Login
          </a>
          <a href="/register" className={styles.loginBtn}>
            Register
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Login;
