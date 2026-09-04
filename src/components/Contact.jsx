import React, { useEffect, useRef, useState } from "react";

const Contact = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const rect = sectionRef.current.getBoundingClientRect();

    setMouse({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
    });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className={`contact-section ${visible ? "contact-visible" : ""}`}
    >
      {/* Background particles */}
      <div className="contact-particle particle-1"></div>
      <div className="contact-particle particle-2"></div>
      <div className="contact-particle particle-3"></div>
      <div className="contact-particle particle-4"></div>
      <div className="contact-particle particle-5"></div>

      <div className="contact-container">

        {/* LEFT */}
        <div className="contact-content">
          <span className="contact-number">05 / CONTACT</span>

          <h2>
            Let's build
            <br />
            something <span>great.</span>
          </h2>

          <p>
            Have a project, opportunity, or just want to say hello?
            Drop me a message and let's create something amazing together.
          </p>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=bhadhauriyaayush@gmail.com#" 
            className="contact-email"
          >
            <span>bhadhauriyaayush@gmail.com</span>
            <span className="email-arrow">↗</span>
          </a>

          <div className="contact-socials">
            <a href="https://github.com/ursayush9454" target="_blank" rel="noreferrer">
              GitHub
            </a>

            <a href="https://www.linkedin.com/in/ayush-bhadauriya-a3aa093a9/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>

            <a href="https://www.instagram.com/urs_.ayush_/#" target="_blank" rel="noreferrer">      
              Instagram
            </a>
          </div>
        </div>

        {/* RIGHT - UNIQUE ORBIT */}
        <div
          className="contact-orbit-area"
          style={{
            "--mouse-x": `${mouse.x}px`,
            "--mouse-y": `${mouse.y}px`,
          }}
        >
          <div className="orbit-glow"></div>

          <div className="orbit orbit-one">
            <span className="orbit-dot dot-one"></span>
          </div>

          <div className="orbit orbit-two">
            <span className="orbit-dot dot-two"></span>
          </div>

          <div className="orbit orbit-three">
            <span className="orbit-dot dot-three"></span>
          </div>

          <div className="contact-core">
            <span className="core-small">AVAILABLE</span>

            <strong>
              LET'S
              <br />
              CONNECT
            </strong>

            <span className="core-status">
              <i></i> Online
            </span>
          </div>

          <div className="orbit-label label-top">
            CREATIVE
          </div>

          <div className="orbit-label label-right">
            CODE
          </div>

          <div className="orbit-label label-bottom">
            BUILD
          </div>

          <div className="orbit-label label-left">
            CREATE
          </div>
        </div>
      </div>

    
    </section>
  );
};

export default Contact;