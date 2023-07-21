import Carousel from "react-bootstrap/Carousel";
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';



var heroData = [
  {
    id: 1,
    image: require("../assets/images/keyboard.jpg"),
    title: "Portfolio Website",
    description:
      " This project focuses on creating a dynamic portfolio website that highlights my knowledge of React and has introduced me to Bootstrap",
    techStack: "Language: Javascript \n FrontEnd: React, Bootstrap \n Build: Git, VsCode",
    gitLink: "https://github.com/PoppyLew/portfolio-project",
  },
  {
    id: 2,
    image: require("../assets/images/coffebeans.jpg"),
    title: "Coffee Help",
    description:
      "This was created as a group project during the final phase of my study with Northcoders Coding Bootcamp",
    techStack: "Language: Dart \n FrontEnd: Flutter \n BackEnd: Firebase Firestore \n Build: Git, VsCode, Xcode, Android Studio",
    gitLink: "https://github.com/PoppyLew/Coffee-Help-",
    otherLinks: {demo: "youtube.com/watch?v=jF7IJb47cdM"},
  },
];

const Projects = () => {
  return (
    <section id="projectsCarousel" className="hero-block">
      <Carousel >
        {heroData.map((hero) => {
          return (
            <Carousel.Item key={hero.id}>
              <img
                style={{height:'20em' }}
                className="d-block w-100"
                src={hero.image} 
                alt={"Slide" + hero.id}

              />
              <Carousel.Caption >
                <div className=" w-100 d-flex flex-column justify-content-center align-items-center">
                <h3>{hero.title}</h3>
                <p>{hero.description}</p>
                <p>{hero.techStack}</p>
                <a className='btn btn-primary'>More information here</a>
               


                </div>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
};

export default Projects;
