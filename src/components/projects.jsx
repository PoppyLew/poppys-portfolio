import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import portImg2 from "../assets/images/portimg2.jpg";
import coffeeImg2 from "../assets/images/coffimg2.png";

var heroData = [
  {
    id: 1,
    image: require("../assets/images/keyboard.jpg"),
    title: "Portfolio Website",
    description:
      " This project focuses on creating a dynamic portfolio website that highlights my knowledge of React and has introduced me to Bootstrap",
    techStack:
      "Language: Javascript \n FrontEnd: React, Bootstrap \n Build: Git, VsCode",
    gitLink: "https://github.com/PoppyLew/portfolio-project",
  },
  {
    id: 2,
    image: require("../assets/images/coffebeans.jpg"),
    title: "Coffee Help",
    description:
      "This was created as a group project during the final phase of my study with Northcoders Coding Bootcamp",
    techStack:
      "Language: Dart \n FrontEnd: Flutter \n BackEnd: Firebase Firestore \n Build: Git, VsCode, Xcode, Android Studio",
    gitLink: "https://github.com/PoppyLew/Coffee-Help-",
    otherLinks: { demo: "youtube.com/watch?v=jF7IJb47cdM" },
  },
];

const Projects = () => {
  return (
    <section>
      <Carousel id="projectsCarousel" className="hero-block">
        {heroData.map((hero) => {
          return (
            <Carousel.Item id={"carouselItem" + hero.id}>
              
              <img
              id={"carouselimg" + hero.id}
                style={{ height: "30em" }}
                src={hero.image}
                alt={"Slide" + hero.id}
                
              />
              <Carousel.Caption id={"carouselCaption" + hero.id}>
                <div className=" w-100 d-flex flex-column justify-content-center align-items-center">
                  <h3>{hero.title}</h3>
                  <p>{hero.description}</p>
                  <p>{hero.techStack}</p>
                  <a className="btn btn-primary">More information here</a>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>

      <Container fluid className="project-block">
        <div className="project-title">
          <h2>Portfolio Website</h2>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={portImg2} roundedCircle className="circleImg" />
          </Col>
          <Col sm={6}>
            <p>
              In this coding project, I will showcase my advanced skills in
              React development while learning Bootstrap, a popular front-end
              framework. The project focuses on creating a dynamic portfolio
              website that highlights my coding abilities. Key features include:
            </p>
            <ol>
              <li>
                React Structure: Utilise React's component-based architecture to
                build a scalable and interactive user interface.
              </li>
              <li>
                Bootstrap Integration: Enhance the UI design using Bootstrap's
                pre-built components and responsive grid system.
              </li>
              <li>
                Responsive Design: Ensure the website adapts seamlessly to
                various screen sizes, providing an optimal user experience on
                desktop, tablet, and mobile.
              </li>
              <li>
                Project Showcase: Display project details, including
                descriptions, technologies used, and links to live demos or
                repositories.
              </li>
              <li>
                Skills and Experience: Present skills and experiences in an
                organised and visually appealing manner.
              </li>
              <li>
                Contact Form: Implement a user-friendly contact form to
                facilitate communication.
              </li>
            </ol>
            <p>
              By completing this project, I will demonstrate my React expertise
              and gain practical experience with Bootstrap, creating an
              impressive portfolio website that showcases my skills as a
              developer.
            </p>
          </Col>
        </Row>
      </Container>

      <Container fluid className="project-block">
        <div className="project-title">
          <h2>Coffee, Help!</h2>
        </div>
        <Row>
          <Col sm={6}>
            <p>
            We wanted to create a simple and universally relatable app. What is more universal than an activity most British people do daily, even hourly for some? Having a brew! Having chosen a simple concept we wanted to challenge ourselves by learning some completely new tech. We decided on a combination of Flutter and Firebase, allowing us to build a mobile app suitable for multiple platforms, usable across both Android and iOS.


            </p>
            <p>
            Coffee, Help! allows the user to track their daily caffeine intake with the touch of a button. It has responsive visual representations of data changes that can be seen at a glance. It's easy to personalise, with user inputs to change your daily caffeine goal, add your own favourite custom drinks and pick and change your favourite daily drinks to be displayed on the home screen as quick add options.
            </p>
            <p>Flutter and Firebase are technologies that cover a large amount of usability. Although it took a bit longer for the initial learning and set up we found that there were many advantages in the inbuilt styling and functions</p>
          </Col>
          <Col sm={6}>
            <Image src={coffeeImg2} roundedCircle className="circleImg" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
