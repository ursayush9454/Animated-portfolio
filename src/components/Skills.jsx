import React, { useEffect, useRef, useState } from "react";

const Skills = () => {
  const skillsRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const skills = [
    {
      name: "HTML",
      icon: "🌐",
      level: 95,
    },
    {
      name: "CSS",
      icon: "🎨",
      level: 90,
    },
    {
      name: "JavaScript",
      icon: "JS",
      level: 90,
    },
    {
      name: "React",
      icon: "⚛",
      level: 90,
    },
    {
      name: "Node.js",
      icon: "⬡",
      level: 85,
    },
    {
      name: "Python",
      icon: "PY",
      level: 85,
    },
    {
      name: "MongoDB",
      icon: "🍃",
      level: 80,
    },
    {
      name: "Git & GitHub",
      icon: "●",
      level: 90,
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
        threshold: 0.2,
      }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills-section" id="skills" ref={skillsRef}>
      <div className="skills-container">

        {/* Heading */}
        <div className={`skills-heading ${visible ? "show" : ""}`}>
          <span>MY SKILLS</span>
          <h2>Technologies I Work With</h2>
          <p>
            Tools and technologies I use to build modern, responsive
            and scalable web applications.
          </p>
        </div>

        {/* Skills */}
        <div className="skills-grid">

          {skills.map((skill, index) => (
            <div
              className={`skill-card ${visible ? "show" : ""}`}
              key={skill.name}
              style={{
                "--delay": `${index * 0.1}s`,
              }}
            >

              {/* Icon */}
              <div className="skill-icon">
                {skill.icon}
              </div>

              {/* Name */}
              <h3>{skill.name}</h3>

              {/* Progress */}
              <div className="skill-progress">
                <div
                  className="skill-progress-bar"
                  style={{
                    "--level": `${skill.level}%`,
                  }}
                ></div>
              </div>

              {/* Percentage */}
              <div className="skill-bottom">
                <span>Skill Level</span>
                <strong>{skill.level}%</strong>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;