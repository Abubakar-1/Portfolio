import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import React from "react";
import handwave from "../../assets/pics/waving.png";
import htmlcss from "../../assets/pics/htmlcss.svg";
import jsts from "../../assets/pics/jsts.svg";
import reacttailwind from "../../assets/pics/reacttailwind.svg";
import nodemongo from "../../assets/pics/nodemongo.svg";

export const Hero = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container">
          <div className="content">
            <div className="hero-main">
              <div className="hero-text">
                <h1>Web and Mobile Developer</h1>
                <img src={handwave} alt="" />
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
                    <img src={htmlcss} alt="" />
                  </li>
                  <li>
                    <img src={jsts} alt="" />
                  </li>
                  <li>
                    <img src={reacttailwind} alt="" />
                  </li>
                  <li>
                    <img src={nodemongo} alt="" />
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
