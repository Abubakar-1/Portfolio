import React from "react";

export const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="img-side">
            <img
              src="src\assets\pics\about-img.62b47e7f183d4b4e9feb.webp"
              alt="mee"
              className="img-side__main-img"
            />
          </div>
          <div className="text-side">
            <h3>About Me</h3>
            <h4>
              Mobile and Web Developer
              <br />
              based in Abuja, Nigeria 📍
            </h4>
            <p>
              Hey, my name is Abubakar, I'm a Mobeile and a FullStack Web
              Developer. My passion is to create and develop a clean and dynamic
              application for my users.
              <br />
              <br />
              My main stack currently is MERN in combination with Tailwind CSS
              and TypeScript and React Native for Mobile.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
