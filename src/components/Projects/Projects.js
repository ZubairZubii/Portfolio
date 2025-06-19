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
import invest from "../../Assets/invest.png";
import game from "../../Assets/game.png";
import eTicket from "../../Assets/e-ticket.png";
import fashion from "../../Assets/fashion.png";
import mistyMountain from "../../Assets/misty_mountain.png";
import socialMedia from "../../Assets/social_media.png";

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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={invest}
              isBlog={false}
              title="InvestNet Admin & Business Panel"
              description="A scalable platform to manage investors and businesses with separate admin and business interfaces. Full-stack solution featuring secure admin controls and a dynamic business dashboard.\n\n🔹 Admin Panel Highlights\n– Role-based user management\n– Business verification workflows\n– Flagged content moderation\n– Platform analytics dashboard\n\n🔹 Business Panel Highlights\n– Business profile & post management\n– Investor discovery & messaging\n– Payment tracking & financial analytics\n– Real-time notifications and metrics\n\nSkills: React, NodeJS Framework, ExpressJS, MongoDB, UI Animation"
              ghLink="https://github.com/ZubairZubii/INVESTNET.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={game}
              isBlog={false}
              title="Steam Game Explorer – Full Stack Game Discovery Platform"
              description="A full stack web application to explore, compare, and manage Steam PC games.\n\n🔹 Key Features\n– Modern, responsive homepage with featured games\n– Secure user registration and login\n– Game search, filters, and comparison view\n– Game detail pages with rich metadata\n– Personal game library (add, view, manage games)\n– Contact and About sections for user engagement\n\nSkills: React Native, ExpressJS, MongoDB, CSS 3, Router"
              ghLink="https://github.com/ZubairZubii/STEAM-GAME-EXPLORER.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eTicket}
              isBlog={false}
              title="E-Ticket Booking System – React.js + Tailwind CSS"
              description="A full-featured and responsive bus ticket booking system using React.js. Includes a powerful admin dashboard and a smooth user interface for real-time ticket booking, management, and tracking.\n\n🔹 Key Features\n– User authentication & secure routing\n– Ticket booking with schedule & route search\n– Admin dashboard: manage buses, drivers, fares, bookings\n– Real-time stats, status indicators, and refund processing\n– Clean UI/UX with Tailwind CSS and Framer Motion\n\nSkills: React, Tailwind CSS, MongoDB, Node.js, Next.js"
              ghLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fashion}
              isBlog={false}
              title="Full Stack E-Commerce Website – MERN Stack"
              description="A modern e-commerce platform using the MERN stack with a focus on performance, scalability, and a smooth user experience. Supports secure authentication, product management, payments, and real-time features.\n\n🔹 Key Features\n– Secure user login & profile management (JWT)\n– Product catalog, search, filter, wishlist\n– Shopping cart, checkout, and Stripe payments\n– Order history & email notifications\n– AI-powered features using Google Gen AI\n\nSkills: React, Node.js, ExpressJS, MongoDB, Stripe, Google Gen AI"
              ghLink="https://github.com/ZubairZubii/React-Fashion-Website.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mistyMountain}
              isBlog={false}
              title="Misty Mounts – Tourism Web App (MERN Stack)"
              description="A full-featured tourism platform using the MERN stack to promote Northern Pakistan. Guides users to both famous and hidden tourist spots, allowing them to explore destinations, book hotels, and interact with local guides.\n\n🔹 User Features\n– Browse destinations & hotels\n– User authentication (JWT)\n– Profile & booking management\n– Dark mode, modern responsive UI\n\n🔹 Local Guide Panel\n– Manage listings & bookings\n– View analytics & update profiles\n\nSkills: React, Node.js, ExpressJS, MongoDB, Tailwind CSS"
              ghLink="https://github.com/ZubairZubii/Misty-Mounts-Tourist-Guide.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={socialMedia}
              isBlog={false}
              title="Social Media Web App – MERN Stack"
              description="A full-featured social media web app built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with secure REST APIs and JWT authentication. Includes user signup/login, profile editing, post creation with captions, like/unlike, follow/unfollow, and a personalized feed.\n\nSkills: NodeJS Framework, React, Redux, MongoDB Ops Manager, RESTful API"
              ghLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;