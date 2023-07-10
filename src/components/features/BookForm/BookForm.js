import React, { useState } from "react";
import styles from "./BookForm.module.scss";
import { Button, Col, Form, Row } from "react-bootstrap";
const BookForm = () => {
  const [car, setCar] = useState("merc");
  const [city, setCity] = useState("Warszawa");
  const [startDate, setStartDate] = useState();
  const [endDate, setendDate] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(car);
  };
  return (
    <>
      {" "}
      <h3 className={"col-12 " + styles.bookTitle}>Book a car</h3>{" "}
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col className="col-12 col-md-6 col-lg-4">
            <Form.Group>
              <Form.Label>Select a car type</Form.Label>
              <Form.Select onChange={(e) => setCar(e.target.value)}>
                <option value="mercedes">Mercedess E Class</option>
                <option value="skoda">Skoda Kamiq</option>
                <option value="peugeot">Peugeot 3008</option>
                <option value="hyundai">Hyoundai Elantra</option>
              </Form.Select>
            </Form.Group>{" "}
          </Col>
          <Col className="col-12 col-md-6 col-lg-4">
            <Form.Group>
              <Form.Label>Select a city</Form.Label>
              <Form.Select onChange={(e) => setCity(e.target.value)}>
                <option value="Warszawa">Warszawa</option>
                <option value="Kraków">Kraków</option>
                <option value="Wrocław">Wrocław</option>
                <option value="Gdańsk">Gdańsk</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col className="col-12 col-md-6 col-lg-4">
            <Form.Group>
              <Form.Label>Select a rental date</Form.Label>
              <Form.Control
                type="date"
                onChange={(e) => setStartDate(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col className="col-12 col-md-6 col-lg-4">
            <Form.Group>
              <Form.Label>Select a return date</Form.Label>
              <Form.Control
                type="date"
                onChange={(e) => setendDate(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col className={"col-12 col-md-6 col-lg-4 " + styles.btnBook}>
            <button type="submit">Search</button>
          </Col>
        </Row>{" "}
      </Form>
    </>
  );
};

export default BookForm;
