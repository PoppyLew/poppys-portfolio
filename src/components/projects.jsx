import Carousel from "react-bootstrap/Carousel";
import React, { useState } from 'react';



var heroData = [
  {
    id: 1,
    image: require("../assets/images/portfolioWebsite.jpg"),
    title: "This very portfolio site",
    description:
      "I decided to use react to recover and expand my knowledge. I did want to be able to challenge myself with something new though so I have been using Bootstrap for the first time to create a responsive user experience",
    techStack: ["react", "bootstrap", "vscode"],
    gitLink: "https://github.com/PoppyLew/portfolio-project",
  },
  {
    id: 2,
    image: require("../assets/images/coffeeHelp.jpg"),
    title: "Coffee Help",
    description:
      "This was created as a group project during the final phase of my study with Northcoders Coding Bootcamp",
    techStack: ["flutter", "firebase", "vscode"],
    gitLink: "https://github.com/PoppyLew/Coffee-Help-",
    otherLinks: "youtube.com/watch?v=jF7IJb47cdM",
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
                className="d-block w-100"
                src={hero.image}
                alt={"Slide" + hero.id}
              />
              <Carousel.Caption>
                <h3>{hero.title}</h3>
                <p>{hero.description}</p>
                <p>{hero.techStack}</p>
                <a className='btn btn-primary' href={hero.gitLink}>GitHub</a>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
};

export default Projects;
