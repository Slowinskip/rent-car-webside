import React from "react";
import styles from "./Login.module.scss";
import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container className={styles.container}>
      <div className={"col-xs-8 col-md-4 " + styles.loginDiv}>
        <h4>LOGIN</h4>
        <Form.Label className={styles.loginForm}>Email</Form.Label>
        <input className={styles.loginInput} type="text"></input>
        <Form.Label className={styles.loginForm}>Password</Form.Label>
        <input className={styles.loginInput} type="password"></input>
        <div className={styles.loginBtnDiv}>
          <a className={styles.loginBtn}>Login</a>
          <a href="/register" className={styles.loginBtn}>
            Register
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Login;
