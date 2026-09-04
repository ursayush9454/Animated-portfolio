import { motion } from "framer-motion";
import profileImage from "../assets/profile.png";
function Hero() {
  return (
    <section className="hero" id="home">

      {/* Background Glow */}
      <div className="hero-glow"></div>

      {/* Left Content */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.p
          className="hero-small"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          HELLO, I'M
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Ayush <span>Bhadauriya</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          MERN Stack Developer
        </motion.h2>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          I build modern, responsive and interactive web
          applications using React and the MERN stack.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <a href="#projects" className="primary-btn">
            View Projects
          </a>

          <a href="#contact" className="secondary-btn">
            Contact Me
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="social-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <a href="https://github.com/ursayush9454" aria-label="GitHub">
            GitHub
          </a>

          <a href="https://www.instagram.com/urs_.ayush_/#" aria-label="LinkedIn">
            instagram
          </a>

          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=bhadhauriyaayush@gmail.com#" aria-label="Email" target="_blank">
            Email
          </a>
          <a href="https://www.linkedin.com/in/ayush-bhadauriya-a3aa093a9/" aria-label="linkedin" target="_blank" >Linkedin</a>
        </motion.div>
      </motion.div>

      {/* Right Side */}
      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.4,
          duration: 1,
          type: "spring",
        }}
      >
        <div className="profile-wrapper">

          <div className="profile-ring"></div>

          <div className="profile-circle">
  <img src={profileImage} alt="Ayush Bhadauriya" />
</div>

          {/* Floating Tech Cards */}
          <motion.div
            className="floating-card card-react"
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            React
          </motion.div>

          <motion.div
            className="floating-card card-js"
            animate={{
              y: [0, 15, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
            }}
          >
            JavaScript
          </motion.div>

          <motion.div
            className="floating-card card-node"
            animate={{
              x: [0, 10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >
            Node.js
          </motion.div>

        </div>
      </motion.div>

    </section>
  );
}

export default Hero;