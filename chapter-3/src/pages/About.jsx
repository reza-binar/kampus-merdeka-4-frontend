import React from "react";
import { Container } from "react-bootstrap";

// If the file contains module.css you need to call like an object
// If the file not contains the module.css or just .css you just need to call like a normal css
import AboutStyles from "../styles/About.module.css";

function About() {
  return (
    <Container className="my-2">
      <h4 className={`text-center ${AboutStyles["text-blue"]}`}>About</h4>
    </Container>
  );
}

export default About;
