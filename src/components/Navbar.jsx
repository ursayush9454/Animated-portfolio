import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { motion } from "framer-motion";
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';





function Navbar(){
    const [menuOpen ,setMenuOpen]=useState(false);

    const navItems=["Home ", "About" , "Skills", "Projects"," Experience","Contact"];

    return(
        <motion.nav
        className="navbar"  initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <a href="#home" className='logo'>Ayush <span>.</span> </a>

                 <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </a>
        ))}
      </div>

      <a href="https://portfolio-94.onrender.com/" className='resume-btn' target="_blank"> Resume</a>
      <button className='menu-btn' onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
        </button>

           


        </motion.nav>

    )
}

export default Navbar
