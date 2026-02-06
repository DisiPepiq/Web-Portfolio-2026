import reactLogo from './assets/react.svg';
import './App.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css';


import dublinImg from './assets/images/Dublin.webp';
import progImg from './assets/images/programming.png';
import net from './assets/images/1net.png';
import project1 from './assets/images/p1.png';
import project2 from './assets/images/php.png';
import project3 from './assets/images/g1.png';
import project4 from './assets/images/data1.png';



function App() {
  return (
    
    <>
    {/* NAVBAR */}
      <Navbar expand="lg" className="navbar-custom" fixed="top">

  <Container>
    {/* ICONs links*/}
    <Navbar.Brand className="d-flex gap-3">
      <a
        href="https://www.linkedin.com/in/disi-pepiq-9664b429a/"
        target="_blank"
        rel="noopener noreferrer"
        className="fs-4 social-icon"
      >
        <i className="bi bi-linkedin"></i>
      </a>
      <a
        href="https://github.com/disipepiq"
        target="_blank"
        rel="noopener noreferrer"
        className="fs-4 social-icon"
      >
        <i className="bi bi-github"></i>
      </a>
      <div className="email-text">Disipepiq44@gmail.com</div>
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#experience">Experience</Nav.Link>
        <Nav.Link href="#projects">Projects</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

    


<section id="home" className="section section-home">
  {/* MAIN CONTENT */}
      <Container className="text-center mt-4">
        <h1>Disi Pepiq</h1>
        <h2>Web Portfolio</h2>

          <h4> I am currently work as a Junior Desktop support engineer at 1Network.<br></br>
          I am a graduate in computer science receiving a 2nd class honours from TU Dublin Blanchardstown.</h4>

        </Container>
</section>



<section id="about" className="section section-about">
  {/* About CONTENT */}
      <Container className="about">
        <h1>About</h1>
          <br></br>

       <Row className="g-4">
       <Col md={6}>
              <Card className="about-card h-100">
              <Card.Title className="project-title">Eduaction</Card.Title>
              <Card.Img
                variant="top"
                src={dublinImg}
                style={{ width: "85%", height: "auto", margin: "0 auto"}}
              />
              <Card.Body className="d-flex flex-column">
                <br></br>
                <Card.Title className="project-title">TU Dublin Blanchardstown,</Card.Title><br></br>
                <Card.Title>Bachelor’s degree in computer science,</Card.Title>
                <Card.Title>2nd Class Honors (3.0 GPA),</Card.Title>
                <Card.Title>
                  2020- 2024 
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

<Col md={6}>
             <Card className="about-card h-100">
              <Card.Title className="project-title">IT Skills</Card.Title>
              <Card.Img
                variant="top"
                src={progImg}

              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="project-title">Languages/frameworks:</Card.Title>
                <Card.Text>
                  Java, JavaScript, C, C#, PHP, Python, CSS, Node.js, react.js, Expo js, Symfony,
                CSS Bootstrap
                </Card.Text>

              <Card.Title className="project-title">Tools:</Card.Title>
                <Card.Text>
                  Eclipse, Visual Studio, Google Collab, Android Studio, Unity, Packet Tracer, Linux, git, GitHub
                </Card.Text>

                <Card.Title className="project-title">Database Management:</Card.Title>
                <Card.Text>
                  MySQL, Google Firebase
                </Card.Text>
              
              
              </Card.Body>
            </Card>
          </Col>
</Row>
        </Container>



</section>


<section id="experience" className="section section-experience">
  {/* experience CONTENT */}
      <Container className="text-left mt-4">
        <h1>Work Experience</h1>
<br></br>

 <Row className="justify-content-center">
       <Col md={6}>
            <Card className="work-card">
              <Card.Img
                variant="top"
                src={net}
                style={{ boxShadow: "0 6px 20px rgba(0, 0, 0, 0.25)" }}
              />
              <Card.Body>
                <Card.Title className="project-title">Junior Desktop support engineer at 1Network (June 2025 – Present)</Card.Title>

                <Card.Text>
                  <ul>
        <li> Provide in-person and remote technical support for employees’ hardware and software, including
          laptops, monitors, docking stations, printers, and software applications across the company.</li>

          <li>Image, configure, and wipe Windows and macOS laptops.</li>
          <li>Log, track, and resolve incidents using the ServiceNow ticketing system.</li>
          <li>Manage and enrol user devices using Microsoft Intune, including retrieving admin passwords.</li>
          <li>Manage user accounts in Adaxes, including adding, removing, and delegating users.</li>
          <li>Map user’s network drives</li>
          <li>Manage user access, including adding or removing users to appropriate Active Directory security
groups via BeyondTrust remote access.</li>


          </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          </Row>

        </Container>
</section>

        
        {/* Projects Cards Section */}
         <section id="projects" className="section section-projects">
        <Container>
          <h1>Projects</h1>
        <Row className="g-4 mt-4">
          <Col md={6}>
            <Card className="projects-card h-100">
              <Card.Img
                variant="top"
                src={project1}
              />
               <Card.Body className="d-flex flex-column">
                <Card.Title className="project-title">4th year final project</Card.Title>
                <Card.Title>Made with: Javascript, React native expo, and firebase</Card.Title>

            <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
          
            
            <div className="tech-icons">
              <i className="devicon-javascript-plain"></i>
              <i className="devicon-reactnative-original"></i>
              <i className="devicon-expo-original-wordmark colored"></i>
              <i class="devicon-firebase-plain"></i>
          
          </div>

          
        
                <Card.Text>
                A cross-platform mobile app that helps young children learn English words and vocabulary using AI speech technology. 
                This app allows children to hear words to improve their pronunciation and listening skills.
                The app includes gamification features, using quizzes and rewards, to make an engaging and motivating learning experience. 
            Children can play interactive games where they select the correct word based on what they hear, making learning both enjoyable and challenging.
          The project also includes a child-friendly chatbot for learning assistance and parental controls, such as screen-time limits for children.

                </Card.Text>
                 <Button
                  variant="light"
                  className="custom-btn mt-auto align-self-start"
                  href="https://github.com/B00138946/Year-4-Final-project"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  Github <i className="bi-github"></i>
              </Button>


              </Card.Body>
            </Card>
          </Col>
        
          <Col md={6}>
            <Card className="projects-card h-100">
              <Card.Img
                variant="top"
                src={project2}
              />
               <Card.Body className="d-flex flex-column">
                <Card.Title className="project-title">Online shopping CRUD project</Card.Title>
                <Card.Title>Made with: PHP, Symfony, and MYSQL</Card.Title>

            
          
            <div className="tech-icons"> 
            <i class="devicon-php-plain"></i> 
            <i class="devicon-symfony-original colored"></i>
            <i class="devicon-mysql-plain-wordmark"></i>
          
          </div>
          
          
                <Card.Text>
                  An online shopping website where
                  admins can add, edit, and delete clothing products through a CRUD interface. All products are stored in a MySQL 
                  database and are displayed on the website's homepage. Users can register and log in, and once logged in they can view available products, including details such as brand, price, and images.
                  The system uses role-based access, ensuring only admins can manage products while customers can browse the store securely.
                </Card.Text>
                 <Button
                  variant="light"
                  className="custom-btn mt-auto align-self-start"
                  href="https://github.com/B00138946/PHP-Symfony-Year3-assignment-Updated"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  Github <i className="bi-github"></i>
              </Button>

              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="projects-card h-100">
              <Card.Img
                variant="top"
                src={project3}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="project-title">Unity Game assignment</Card.Title>
                <Card.Title>Made with: Unity and C#</Card.Title>
                 <div className="tech-icons"> 
          
            <i class="devicon-unity-plain"></i>
            <i class="devicon-csharp-plain"></i>
          
          </div>
                <Card.Text>
                  In this game the Player moves by itself and you can also move left and right.
                  The main goal in this game is to pass the levels without hitting obstacles.
                You can collect coins to get points and you have 40 seconds to pass each level.
                If you hit an obstacle it will be Gameover and you'll start from the beginning making the game harder.
                </Card.Text>
                <Button
                  variant="light"
                  className="custom-btn mt-auto align-self-start"
                  href="https://github.com/B00138946/NinjaBoy-2nd-year-Game"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  Github <i className="bi-github"></i>
              </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="projects-card h-100">
              <Card.Img
                variant="top"
                src={project4}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="project-title">4th year Data Analysis Assignment</Card.Title>
                <Card.Title>Made: with Google colab, Python and pandas</Card.Title>
                <div className="tech-icons"> 
          
            <i class="devicon-googlecolab-plain"></i>
            <i class="devicon-python-plain"></i>
            <i class="devicon-pandas-plain-wordmark"></i>
          
          </div>
                <Card.Text>
                  Analysed and mined a student dataset using the CRISP-DM methodology.
                  Defined business and data mining objectives, performed EDA techiques using statistics and visualisations, and identified data quality issues.
                  Built and evaluated a baseline classification model using suitable validation techniques and performance metrics. 
                  Applied multiple data preparation techniques and hyperparameter tuning to improve model performance 
                  and explained all decisions made.

                </Card.Text>
                 <Button
                  variant="light"
                  className="custom-btn mt-auto align-self-start"
                  href="https://github.com/B00138946/Data-Analysis-Assignment-4th-year-"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  Github <i className="bi-github"></i>
              </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
            </section>

      {/* FOOTER */}
      <footer className="footer text-light text-center py-3 mt-5">
  <Container>
    <div className="my-4">
      <img src={reactLogo} className="logo" alt="React logo" />
      <h4>This website was made with JavaScript and React</h4>
    </div>
    <p>© 2026 Disi Pepiq. All rights reserved.</p>
  </Container>
</footer>
    </>
  );
}

export default App;
