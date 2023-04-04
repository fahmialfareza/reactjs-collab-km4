import React from "react";
import { Container } from "react-bootstrap";
import Homepage from "../components/Homepage";
import Siti from "./Siti";

function Home() {
  return (
    <Container>
      <Homepage />
      <Siti />
    </Container>
  );
}

export default Home;
