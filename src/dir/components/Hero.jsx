import {
  IconBrandGit,
  IconBrandGithub,
  IconBrandGithubCopilot,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import React from "react";

export const Hero = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container">
          <div className="content">
            <div className="hero-main">
              <div className="hero-text">
                <h1>Web and Mobile Developer</h1>
                <img
                  src="src\assets\pics\waving.1bae5fcfb51082b5c2b4.png"
                  alt=""
                />
                <p>
                  Hi, I'm Abubakar Usman. A passionate Full Stack Web and Mobile
                  Developer based in Abuja, Nigeria. 📍
                </p>
                <span>
                  <a href="#">
                    <IconBrandLinkedin height={30} width={30} />
                  </a>
                  <a href="#">
                    {" "}
                    <IconBrandGithub height={30} width={30} />
                  </a>
                </span>
              </div>
              <div className="hero-img"></div>
            </div>
            <div className="skills">
              <p>Tech Stack</p>
              <div className="logos">
                <ul>
                  <li>
                    <img src="src\assets\pics\icons (3).svg" alt="" />
                  </li>
                  <li>
                    <img src="src\assets\pics\icons (2).svg" alt="" />
                  </li>
                  <li>
                    <img src="src\assets\pics\icons (1).svg" alt="" />
                  </li>
                  <li>
                    <img src="src\assets\pics\icons.svg" alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
