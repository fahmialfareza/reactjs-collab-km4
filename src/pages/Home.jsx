import React from "react";
import { Container } from "react-bootstrap";
import Homepage from "../components/Homepage";
import AtillaPage from "./AtillaPage";

function Home() {
  return (
    <Container>
      <Homepage />
      <AtillaPage />
    </Container>
  );
}

export default Home;
