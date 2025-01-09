// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { AnimatedBackground } from 'animated-backgrounds';


/*
import images like this!
<img src={require('./images/cloud.jpg')} alt="" />
*/


const homeContent =
  <div>
    Hi, I'm Kaitlyn!
  </div>

const aboutMeContent =
  <div>
    If you're just here for my resume, you can download it <a href="">here</a>. (This isn't implemented yet).
    <br /><br />
    Currently I am working on a B.S. in computer science at the University of Massachusetts-Amherst.
    <br /><br />
    I'm currently searching for a job in software or web development.
  </div>

const myProjectsContent =
  <div>
    my projects content
  </div>

const linksContent =
  <div>
    GitHub: <a href="https://github.com/kaitlynmalsky">https://github.com/kaitlynmalsky</a><br />
    LinkedIn: <a href="https://www.linkedin.com/in/kaitlyn-malsky-779a2429a/">https://www.linkedin.com/in/kaitlyn-malsky-779a2429a/</a><br />
    email: <a href="mailto:kaitlynmalsky@gmail.com">kaitlynmalsky@gmail.com</a>
  </div>

const funStuffContent =
  <div>
    fun stuff content
  </div>

function App() {
  const [currentContent, setCurrentContent] = useState(homeContent);

  // setCurrentContent(homeContent);

  return (
    <div className="App">
      <AnimatedBackground animationName="gradientWave"
        blendMode="screen" ></AnimatedBackground>
      <header className="App-header">
        <div>kaitlyn's site!</div>
      </header>
      <div className="row">
        <div className="column1">
          <div className="nav-list">
            <div className='nav-item' onClick={() => setCurrentContent(homeContent)}>
              <img className="nav-img" src={require('./images/teapot.jpg')} alt="home icon"></img>
              <div className="nav-text">home</div>
            </div>
            <div className='nav-item' onClick={() => setCurrentContent(aboutMeContent)}>
              <img className="nav-img" src={require('./images/cloud.jpg')} alt="about me icon"></img>
              <div className="nav-text" >about me</div>
            </div>
            <div className='nav-item' onClick={() => setCurrentContent(myProjectsContent)}>
              <img className="nav-img" src={require('./images/hearts.jpg')} alt="my projects icon"></img>
              <div className="nav-text">my projects</div>
            </div>
            <div className='nav-item' onClick={() => setCurrentContent(linksContent)}>
              <img className="nav-img" src={require('./images/moon_bunny.jpg')} alt="links icon"></img>
              <div className="nav-text">links</div>
            </div>
            <div className='nav-item' onClick={() => setCurrentContent(funStuffContent)}>
              <img className="nav-img" src={require('./images/jelly.jpg')} alt="fun stuff icon"></img>
              <div className="nav-text">fun stuff</div>
            </div>
          </div>
        </div>
        <div className="column2">
          <div className="content-box">
            {currentContent}
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
