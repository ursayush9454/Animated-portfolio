import React, { useEffect, useRef, useState } from "react";

import netflixImg from "../assets/projects/netflix.png";
import currencyImg from "../assets/projects/currencyconverter.png";
import kanbanImg from "../assets/projects/kanbanboard.png";
import ticTacToeImg from "../assets/projects/tictactoe.png";
import todoImg from "../assets/projects/todolist.png";
import movieSearchImg from "../assets/projects/moviesearch.png";
import expenseImg from "../assets/projects/expensetracker.png";
import Shopify from "../assets/projects/Shopify.png"
const Projects = () => {
  const projectsRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const projects = [
     {
      number: "01",
      title: "Shpify-E-Commerce",
      description:
        "A full-stack e-commerce website built with React.js, Node.js, Express.js, and MongoDB featuring authentication, product management, cart, checkout, and order placement with a responsive and modern UI",
      image:  Shopify,
      tags: ["React", "Node.js","Express.js","MangoDB"],
      live: "https://e-commerce-shopify-lktl.onrender.com/",
      github: "#",
    },
   

    {
      number: "02",
      title: "Netflix Clone",
      description:
        "A responsive Netflix-inspired website with a modern UI, movie sections and smooth user experience.",
      image: netflixImg,
      tags: ["HTML", "CSS", "JavaScript"],
      live: "https://portfolio-94.onrender.com/pages/netflix.html",
      github: "#",
    },
    {
      number: "03",
      title: "Todo List",
      description:
        "A simple and interactive task management application for adding, completing and deleting daily tasks.",
      image: todoImg,
      tags: ["HTML", "CSS", "JavaScript"],
      live: "https://https://portfolio-94.onrender.com/pages/list.html",
      github: "#",
    },

    {
      number: "04",
      title: "Tic Tac Toe",
      description:
        "A classic two-player Tic Tac Toe game with interactive gameplay and win detection logic.",
      image: ticTacToeImg,
      tags: ["HTML", "CSS", "JavaScript"],
      live: "https://portfolio-94.onrender.com/pages/tictactoe.html",
      github: "#",
    },
    {
      number: "05",
      title: "Currency Converter",
      description:
        "A real-time currency converter that allows users to convert currencies with a simple and clean interface.",
      image: currencyImg,
      tags: ["HTML", "CSS", "JavaScript", "API"],
      live: "https://portfolio-94.onrender.com/pages/converter.html",
      github: "#",
    },

    {
      number: "06",
      title: "Movie Search",
      description:
        "A movie search application that fetches movie information dynamically through an external API.",
      image: movieSearchImg,
      tags: ["HTML", "CSS", "JavaScript", "API"],
      live: "https://portfolio-94.onrender.com/pages/movie.html",
      github: "#",
    },

    {
      number: "07",
      title: "Expense Tracker",
      description:
        "A React-based expense management application for tracking income, expenses and overall balance.",
      image: expenseImg,
      tags: ["React", "JavaScript", "LocalStorage"],
      live: "#",
      github: "#",
    },

    {
      number: "08",
      title: "Kanban Board",
      description:
        "A React task management board that helps organize tasks into different workflow columns.",
      image: kanbanImg,
      tags: ["React", "Tailwind CSS", "LocalStorage"],
      live: "#",
      github: "#",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
      },
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="projects-section" id="projects" ref={projectsRef}>
      <div className="projects-container">
        {/* Heading */}

        <div className={`projects-heading ${visible ? "show" : ""}`}>
          <div>
            <span>MY WORK</span>

            <h2>Featured Projects</h2>

            <p>
              A collection of projects I've built using modern web technologies,
              APIs and React.
            </p>
          </div>

          <div className="projects-count">
            <strong>08</strong>
            <span>Projects Built</span>
          </div>
        </div>

        {/* Projects */}

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              className={`project-card ${visible ? "show" : ""}`}
              key={project.title}
              style={{
                "--delay": `${index * 0.12}s`,
              }}
            >
              {/* Number */}

              <div className="project-number">{project.number}</div>

              {/* Image */}

              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />

                <div className="project-image-overlay">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="project-image-overlay"
                  >
                    <span>VIEW PROJECT ↗</span>
                  </a>
                </div>
              </div>

              {/* Content */}

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                {/* Tags */}

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                {/* Buttons */}

                <div className="project-buttons">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="project-live"
                  >
                    Live Demo
                    <span>↗</span>
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-github"
                  >
                    GitHub
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}

        <div className={`projects-footer ${visible ? "show" : ""}`}>
          <span>MORE PROJECTS COMING SOON</span>
        </div>
      </div>
    </section>
  );
};

export default Projects;
