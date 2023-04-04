import React from "react";
import { Container } from "react-bootstrap";
import Homepage from "../components/Homepage";
import Arham from "./Arham";
import Syahdan from "./Syahdan";

function Home() {
  return (
    <Container>
      <Homepage />
      <Arham />
      <Syahdan />
    </Container>
  );
}

export default Home;
