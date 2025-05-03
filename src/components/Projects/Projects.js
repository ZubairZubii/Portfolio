import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cafeManagement from "../../Assets/Projects/cafeManagement.png";
import objectDetection from "../../Assets/Projects/objectDetection.png";
import snappyChat from "../../Assets/Projects/snappyChat.png";
import emotionDetection from "../../Assets/Projects/emotionDetection.png";
import movieRecommendation from "../../Assets/Projects/movieRecommendation.png";
import flappyBird from "../../Assets/Projects/flappyBird.png";
import medicalChatbot from "../../Assets/Projects/medicalChatbot.png";
import petServices from "../../Assets/Projects/petServices.png";
import mindCloud from "../../Assets/Projects/mindCloud.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cafeManagement}
              isBlog={false}
              title="Cafe Management System"
              description="A full-featured software solution designed to streamline cafe operations, including order processing, inventory management, billing, and analytics. Built with user-friendly interfaces and powerful modules to enhance efficiency and customer satisfaction."
              ghLink="https://github.com/ZubairZubii/CMS-DATABASE-PROJECT"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={objectDetection}
              isBlog={false}
              title="Multi-Object Detection System"
              description="An AI-powered object detection system using YOLOv8 to identify vehicles, personal protective equipment, and poker playing cards in real-time. Built with OpenCV, Torch, and CVZone for accurate, efficient, and visually rich detection applications."
              ghLink="https://github.com/ZubairZubii/Object-Detection-Projects"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snappyChat}
              isBlog={false}
              title="Snappy – Real-Time Chat Application 💬"
              description="A sleek and responsive chat app built with the MERN stack, featuring real-time messaging, authentication, and modern UI. Easily deployable with Node.js, MongoDB, and Docker support."
              ghLink="https://github.com/ZubairZubii/chat-app-react-nodejs"
              // demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotionDetection}
              isBlog={false}
              title="Facial Emotion Recognition System"
              description="An interactive emotion detection system using OpenCV, Keras, and a CNN to classify facial expressions in real-time via webcam. Features a user-friendly Tkinter GUI with live emoji feedback—perfect for AI demos and emotion-based applications."
              ghLink="https://github.com/ZubairZubii/Facial-Recignition-System"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movieRecommendation}
              isBlog={false}
              title="Movie Recommendation System"
              description="A personalized movie recommendation engine built with NLP and machine learning that uses cosine similarity and vectorized metadata (genres, cast, crew, keywords) to suggest similar titles. With a sleek Streamlit interface and real-time poster display via TMDB API."
              ghLink="https://github.com/ZubairZubii/-Movie-Recommendation-System-"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flappyBird}
              isBlog={false}
              title="Flappy Bird Clone – With AI"
              description="A faithful recreation of the iconic Flappy Bird game using Python and Pygame, featuring pixel-perfect collision detection, smooth animations, and an optional NEAT-based AI that learns to play the game! Whether you're into game dev or AI, this project blends fun with functionality."
              ghLink="https://github.com/ZubairZubii/-Flappy-Bird-Clone-"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medicalChatbot}
              isBlog={false}
              title="Medical Chatbot – AI-Powered Healthcare Assistant"
              description="An intelligent, real-time medical chatbot built using Python, Flask, and Llama-2-7B. Backed by HuggingFace embeddings and Pinecone vector search, this AI assistant can answer complex medical questions with semantic understanding and precision."
              ghLink="https://github.com/ZubairZubii/Medical-Chatbot-with-Llama-and-Pinecone"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={petServices}
              isBlog={false}
              title="Pet Services Platform"
              description="A no-code web solution for managing pet services like daycare, grooming, and boarding. Built with SOFTR and Monday.com, it streamlines bookings, staff workflows, and real-time operations for a seamless pet care experience."
              ghLink="https://github.com/ZubairZubii/SOFTR-SH-EMPLOYEE-WEBSITE"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mindCloud}
              isBlog={false}
              title="MindCloud Automation Workflows"
              description="Powering businesses with smart, time-saving automation that connects tools, reduces manual work, and delivers operational clarity. Seamless integrations for intelligent operations across multiple business platforms."
              ghLink="https://github.com/ZubairZubii/MINDCLODU-AUTOMATION-WORKFLOWS"
              // demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;