import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../../views/Banner/Banner";
import BookForm from "../../features/BookForm/BookForm";
import About from "../../views/About/About";

const Home = () => {
  return (
    <Container>
      <Banner />
      <BookForm />
      <About />
    </Container>
  );
};

export default Home;
