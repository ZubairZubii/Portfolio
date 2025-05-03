import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Zubair</span> from 
            <span className="purple"> Lahore, Pakistan</span>.
            <br />
            I am a passionate Full-Stack Developer and AI enthusiast who loves building intelligent systems and scalable applications.
            <br />
            I have strong experience with MERN stack, Java, C++, Python, and DevOps practices, as well as automation tools like Make.com and Softr.
            <br />
            I also work with advanced NLP techniques and platforms like Mindcloud and OpenEV.
            <br />
            <br />
            Apart from coding, here are a few things I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring AI and NLP tools
            </li>
            <li className="about-activity">
              <ImPointRight /> Automating workflows with Make.com
            </li>
            <li className="about-activity">
              <ImPointRight /> Sharing knowledge through writing or tech forums
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Code not just to solve, but to innovate!"{" "}
          </p>
          <footer className="blockquote-footer">Zubair</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
