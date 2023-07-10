import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../../views/Banner/Banner";
import BookForm from "../../features/BookForm/BookForm";

const Home = () => {
  return (
    <Container>
      <Banner />
      <BookForm />
    </Container>
  );
};

export default Home;
