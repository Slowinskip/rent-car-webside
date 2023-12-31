import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../../views/Banner/Banner";
import BookForm from "../../features/BookForm/BookForm";
import About from "../../views/About/About";
import Models from "../../features/Models/Models";
import { Details } from "../../views/Details/Details";
import { Opinion } from "../../views/Opinion/Opinion";
import FAQ from "../../views/FAQ/FAQ";
import MobileApp from "../../views/MobileApp/MobileApp";

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
      <Container>
        <Opinion />
        <FAQ />
        <MobileApp />
      </Container>
    </>
  );
};

export default Home;
