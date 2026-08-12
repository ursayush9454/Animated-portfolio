import React, { useEffect, useRef, useState } from "react";

const Footer = () => {
  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);

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

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      ref={footerRef}
      className={`footer-section ${visible ? "footer-visible" : ""}`}
    >
      <div className="footer-container">

        {/* Top */}
        <div className="footer-top">

          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              Ayush<span>.</span>
            </a>

            <p>
              Frontend Developer crafting modern,
              interactive and responsive web experiences.
            </p>
          </div>

          <div className="footer-links">
            <h4>Navigation</h4>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-links">
            <h4>Connect</h4>

            <a
              href="https://github.com/ursayush9454" 
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.instagram.com/urs_.ayush_/#"
              target="_blank"
              rel="noreferrer"
            >
              instagram ↗
            </a>

            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=bhadhauriyaayush@gmail.com#">
              Email ↗
            </a>
          </div>

        </div>

        {/* Big text */}
        <div className="footer-big-text">
          <span>LET'S</span>
          <span>BUILD.</span>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Ayush. All rights reserved.
          </p>

          <p>
            Designed & Built with <span>♥</span> and React
          </p>

          <button onClick={scrollToTop} className="back-top">
            Back to top ↑
          </button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;