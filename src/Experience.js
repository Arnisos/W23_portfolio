import React from 'react';
import "./Experience.css"
import "./image.jpg"

const Experience = () => {
  const projects = [
    {
      name: 'Employee Management Systen',
      imageSrc: 'https://www.cutehr.io/wp-content/uploads/2020/05/employees-dashboard-cuteHR-1-1400x788.jpg',
      link: 'https://github.com/Arnisos/Student101322803_COMP3133_Assignment1.git',
    },
    {
      name: 'Kitchen App',
      imageSrc: 'https://play-lh.googleusercontent.com/_gpoObPhi1Df7Obrr8Kl_OsJ4kZdAmlGufAZPzYqPmJ-w7kruCBZxxND4V0WxlERrXg',
      link: 'https://github.com/Arnisos/COMP3123_FullStack_Ass2.git',
    },
    {
      name: 'Restaurant App',
      imageSrc: 'https://codecanyon.img.customer.envatousercontent.com/files/440368442/cover.png?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=bf622ee48b16679421fba51b54058535',
      link: 'https://github.com/CROWIER/Mob_project.git',
    },
  ];

  const handleClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <>
    <h2>Academic Work Experience</h2>
    <div className="project-images">
      {projects.map((project) => (
        <div key={project.name} className="project-image" onClick={() => handleClick(project.link)}>
          <img src={project.imageSrc} alt={project.name} />
          <div className="project-name">{project.name}</div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Experience;
