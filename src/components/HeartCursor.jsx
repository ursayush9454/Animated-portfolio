import React, { useEffect, useRef, useState } from "react";
import "./HeartCursor.css";

const HeartCursor = () => {
  const cursorRef = useRef(null);
  const glowRef = useRef(null);

  const [bursts, setBursts] = useState([]);

  const mouse = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const current = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useEffect(() => {
    const moveMouse = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleClick = (e) => {
      const burst = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };

      setBursts((prev) => [...prev, burst]);

      setTimeout(() => {
        setBursts((prev) =>
          prev.filter((item) => item.id !== burst.id)
        );
      }, 750);
    };

    window.addEventListener("mousemove", moveMouse);
    window.addEventListener("click", handleClick);

    let animationFrame;

    const animate = () => {
      current.current.x +=
        (mouse.current.x - current.current.x) * 0.18;

      current.current.y +=
        (mouse.current.y - current.current.y) * 0.18;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `
          translate3d(
            ${current.current.x}px,
            ${current.current.y}px,
            0
          )
          translate(-50%, -50%)
        `;
      }

      if (glowRef.current) {
        glowRef.current.style.transform = `
          translate3d(
            ${current.current.x}px,
            ${current.current.y}px,
            0
          )
          translate(-50%, -50%)
        `;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("click", handleClick);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      {/* Glow */}
      <div
        ref={glowRef}
        className="heart-cursor-glow"
      />

      {/* Main Heart */}
      <div
        ref={cursorRef}
        className="heart-cursor"
      >
        <div className="heart-shape"></div>
      </div>

      {/* Click Burst */}
      {bursts.map((burst) => (
        <div
          key={burst.id}
          className="heart-burst"
          style={{
            left: burst.x,
            top: burst.y,
          }}
        >
          <span className="mini-heart h1">♥</span>
          <span className="mini-heart h2">♥</span>
          <span className="mini-heart h3">♥</span>
          <span className="mini-heart h4">♥</span>
          <span className="mini-heart h5">♥</span>
          <span className="mini-heart h6">♥</span>
          <span className="mini-heart h7">♥</span>
          <span className="mini-heart h8">♥</span>
        </div>
      ))}
    </>
  );
};

export default HeartCursor;