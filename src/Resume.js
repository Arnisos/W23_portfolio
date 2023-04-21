import React from "react";
import "./Resume.css"; // assuming you have a separate CSS file for styling

const Resume = () => {
  return (
    <div className="resume-container">
      <h2>Bio</h2>
      <p>
        My name is Arnur Azangaliyev and I am a Computer Programmer Analyst student with experience in Angular, React, and RXJS.
      </p>
      <h2>Education</h2>
      <p>
        Computer programming and analysis September 2020 - May 2023 George Brown College, Toronto, ON
      </p>
      <h2>Professional Experience</h2>
      <p>
        Cashier July 2019 - April 2020 Cinema Park, Uralsk, West Kazakhstan
      </p>
      <h2>Technical Skills</h2>
      <ul>
        <li>Angular, React</li>
        <li>SS/SCSS, Flexbox</li>
        <li>Experience building data services and managing application state using RXJS or similar</li>
        <li>JavaScript</li>
        <li>C#</li>
        <li>Python</li>
      </ul>
    </div>
  );
};

export default Resume;
