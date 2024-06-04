import React, { useState } from "react";
import "../../index.css";
import { IconMenu2, IconX } from "@tabler/icons-react";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <nav id="navbar">
        <div className={`mobile-nav ${nav ? "open-menu" : "closed-menu"}`}>
          <span onClick={openNav}>
            <IconX height={30} width={30} />
          </span>
          <ul className="mobile-nav-links">
            <li onClick={openNav}>
              {" "}
              <a href="#home">Home</a>
            </li>
            <li onClick={openNav}>
              {" "}
              <a href="#about">About</a>
            </li>
            <li onClick={openNav}>
              {" "}
              <a href="#projects">Projects</a>
            </li>
            <li onClick={openNav}>
              {" "}
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <h3 className="logo">Abubakar.dev</h3>
        <span onClick={openNav}>
          <IconMenu2 height={30} width={30} className="mobile-menu" />
        </span>
        <ul className="nav_links">
          <li>
            {" "}
            <a href="#home">Home</a>
          </li>
          <li>
            {" "}
            <a href="#about">About</a>
          </li>
          <li>
            {" "}
            <a href="#projects">Projects</a>
          </li>
          <li>
            {" "}
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};
