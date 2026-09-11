import React from "react";
import { useEffect, useRef, useState } from "react";

const Experience = () => {
  const experienceRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      year: "3 Months",
      role: " Intern  Frontend Developer",
      company: "Class Box Technologies",
      description:
        "Working on modern and responsive web interfaces, developing reusable components and improving user experience.",
      skills: [ "JavaScript", "HTML", "CSS"],
    },
    {
      year: "6 Months",
      role: " Junior Frontend Developer",
      company: "Aenora AI Infosolutions",
      description:
        "Worked on frontend development, responsive layouts and interactive web interfaces using modern web technologies.",
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      year:"3 Months",
      role:"Property Manager in Jaipur",
      company:"OYO",
      description:"Worked on jaipur in hotel as a property manager using morden technologies to create bookings and manageing guests",
      skills:["Staff Management","Communication","Health, Safety & Compliance"]
    },
    {
      year: "2026 - Present",
      role: "Mern Stack Developer",
      company: "Defeic Digital ",
      description:
        "Created and customized website templates while working on responsive designs and frontend components.",
      skills: ["React ","TalvindCss","Node.js","Express.js","MangoDB"],
    },

  ];

  return (
    <section
      className={`experience-section ${visible ? "experience-visible" : ""}`}
      id="experience"
      ref={experienceRef}
    >
      <div className="experience-container">

        {/* Heading */}
        <div className="experience-heading">
          <span className="section-number">04</span>

          <h2>
            My <span>Experience</span>
          </h2>

          <p>
            My journey in frontend development and the experience I have
            gained while working on real-world projects.
          </p>
        </div>

        {/* Timeline */}
        <div className="experience-timeline">
          {experiences.map((experience, index) => (
            <div
              className="experience-item"
              key={index}
              style={{ "--delay": `${index * 0.2}s` }}
            >
              {/* Timeline Dot */}
              <div className="timeline-dot"></div>

              {/* Card */}
              <div className="experience-card">

                <div className="experience-top">
                  <span className="experience-year">
                    {experience.year}
                  </span>

                  <span className="experience-number">
                    0{index + 1}
                  </span>
                </div>

                <h3>{experience.role}</h3>

                <h4>{experience.company}</h4>

                <p>{experience.description}</p>

                <div className="experience-skills">
                  {experience.skills.map((skill, skillIndex) => (
                    <span key={skillIndex}>{skill}</span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;