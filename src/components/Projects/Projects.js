import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import groupChat from "../../Assets/Projects/groupChat.png";
import expenseTracker from "../../Assets/Projects/expenseTracker.png";
import apnaStore from "../../Assets/Projects/apnaStore.png";

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
              imgPath={expenseTracker}
              title="Expense Tracker"
              description="Expense tracker built with HTML, CSS, and JavaScript, powered by Node.js and MySQL. Track, visualize, and manage your expenses while enjoying premium features for an enhanced tracking experience."
              ghLink="https://github.com/abhi9871/Expense-Tracker-App"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={groupChat}
              title="Group Chat"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with HTML, CSS, JavaScript, Node.js, and MongoDB. Have features which allows user for realtime messaging, and multimedia sharing."
              ghLink="https://github.com/abhi9871/Group-Chat-App"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={apnaStore}
              title="Apna Store"
              description="Step into Apna Store, where innovation meets convenience! Our dynamic e-commerce platform, expertly crafted with React and fortified by Firebase, invites customers to embark on a personalized online shopping spree, making every purchase a seamless delight."
              ghLink="https://github.com/abhi9871/Expense-Tracker-App"
              demoLink="https://e-commerce-website-navy-one.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
