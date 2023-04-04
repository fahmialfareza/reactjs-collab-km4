import React from "react";
import { Container } from "react-bootstrap";
import Homepage from "../components/Homepage";
import Arham from "./Arham";
import Victor from "./Victor";

function Home() {
  return (
    <Container>
      <Homepage />
      <Arham />
      <Victo/>
    </Container>
  );
}

export default Home;
