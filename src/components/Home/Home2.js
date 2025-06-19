import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a passionate Software Engineering student and Full Stack Developer with 2+ years of experience.
              <br />
              <br />
              I specialize in developing web applications using the{" "}
              <b className="purple">MERN stack</b> and automating workflows with{" "}
              <b className="purple">Softr, Make, and Monday.com</b>.
              <br />
              <br />
              My interests include building AI solutions like{" "}
              <b className="purple">chatbots, recommendation systems, and computer vision applications</b>.
              <br />
              <br />
              I'm skilled in <b className="purple">Python, NLP, OpenCV</b> and love creating seamless solutions using{" "}
              <b className="purple">API integrations</b> and data-driven dashboards.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ZubairZubii"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* Add Twitter if applicable */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/zubair-ali-2a09702b4/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* Add Instagram if applicable */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
