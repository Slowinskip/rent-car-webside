import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../../views/Banner/Banner";
import BookForm from "../../features/BookForm/BookForm";
import About from "../../views/About/About";
import Models from "../../features/Models/Models";

const Home = () => {
  return (
    <Container>
      <Banner />
      <BookForm />
      <About />
      <Models />
    </Container>
  );
};

export default Home;
