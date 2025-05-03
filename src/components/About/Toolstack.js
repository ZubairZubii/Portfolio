import React from "react";
import { Col, Row } from "react-bootstrap";
import vsCodeIcon from "../../Assets/vs code.jpeg";
import postmanIcon from "../../Assets/postman.jpeg";
import jupyterIcon from "../../Assets/jupyter.png";
import softrIcon from "../../Assets/softr.png";
import mindcloudIcon from "../../Assets/mindcloud.avif";
import makeIcon from "../../Assets/Make.png";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={vsCodeIcon} alt="VS Code" style={{ width: "65px", height: "65px" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={postmanIcon} alt="Postman" style={{ width: "65px", height: "65px" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={jupyterIcon} alt="Jupyter" style={{ width: "65px", height: "65px" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={softrIcon} alt="Softr" style={{ width: "65px", height: "65px" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={makeIcon} alt="Make" style={{ width: "65px", height: "65px" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={mindcloudIcon} alt="MindCloud" style={{ width: "65px", height: "65px" }} />
      </Col>
    </Row>
  );
}

export default Toolstack;
