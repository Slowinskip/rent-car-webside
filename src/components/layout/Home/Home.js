import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../../views/Banner/Banner";
import BookForm from "../../features/BookForm/BookForm";
import About from "../../views/About/About";
import Models from "../../features/Models/Models";
import { Details } from "../../views/Details/Details";

const Home = () => {
  return (
    <>
      <Container>
        <Banner />
        <BookForm />
        <About />
        <Models />
      </Container>
      <Details />
    </>
  );
};

export default Home;
