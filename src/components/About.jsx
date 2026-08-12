import React from "react";


import profileimage from"../assets/profile.png"

const Cv=()=>{
    const link = document.createElement("a")
    link.href="/AyushBhadauriya.pdf"
    link.download="ayushresume.pdf"
    document.body.appendChild(link)
    link.click();
    document.body.removeChild(link);

    alert("File Downloaded")
    
}

const About = () => {
  return (

    <section className="about-section" id="about">
      <div className="about-container">

        {/* Section Heading */}
        <div className="about-heading">
          <span>ABOUT ME</span>
          <h2>Get To Know Me</h2>
        </div>

        <div className="about-content">

          {/* Image */}
          <div className="about-image-box">
            <div className="about-glow"></div>
            

            <img
     src={profileimage}
              alt="Ayush"
              className="about-image"
            />
          </div>

          {/* About Text */}
          <div className="about-info">

            <p className="about-description">
              I'm a passionate <strong>MERN Stack Developer</strong> with
              a strong foundation in building responsive, user-friendly
              web applications. I love turning ideas into real-world
              digital experiences.
            </p>

            <div className="about-points">

              <div className="about-point">
                <span>✓</span>
                <p>2+ Years of Coding Experience</p>
              </div>

              <div className="about-point">
                <span>✓</span>
                <p>Specialized in React, Html Css JavaScript</p>
              </div>

              <div className="about-point">
                <span>✓</span>
                <p>Focused on writing clean, efficient & scalable code</p>
              </div>

              <div className="about-point">
                <span>✓</span>
                <p>Constantly learning & exploring new technologies current learning Node.js</p>
              </div>

               <div className="about-point">
                <span>✓</span>
                <p> Current learning Node.js</p>
              </div>

            </div>

            <button onClick={Cv} className="about-cv-btn" >
              Download CV
              <span>↓</span>
            </button>

          </div>
<div className="about-stats">

  <div className="stat-box">
    <div className="stat-icon">◈</div>
    <h3 className="stat-number">10+</h3>
    <p>Projects<br />Completed</p>
  </div>

  <div className="stat-box">
    <div className="stat-icon">♙</div>
    <h3 className="stat-number">2+</h3>
    <p>Years of<br />Experience</p>
  </div>

  <div className="stat-box">
    <div className="stat-icon">◉</div>
    <h3 className="stat-number">8+</h3>
    <p>Technologies<br />Mastered</p>
  </div>

  <div className="stat-box">
    <div className="stat-icon">★</div>
    <h3 className="stat-number">5</h3>
    <p>Coding<br />Platforms</p>
  </div>

</div>
        </div>
      </div>
    </section>
  );
};

export default About;