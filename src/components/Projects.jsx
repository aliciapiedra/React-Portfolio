import React, { Component } from 'react'; 
import '../css/projects.css';
import GuardianLogo from '../images/widget-logo.png'
// import @bootstrap

class Projects extends Component {
    render() {
        return (
          <div className="projectsCard">
          <div class="projects-card spring-fever">
            <div class="title-content">
              <h3>Projects</h3>
          </div>
            <div class="projects-intro">Full Stack Software Developer</div>
              <div className="guardianLogo">
              <a href="https://guardian-app-wyncode.herokuapp.com/"><img src={GuardianLogo} ></img></a>
                <p>Guardian: React on Rails Application. A digital bodyguard whenever you're feeling unsafe.</p>
              </div>
          <div class="gradient-overlay"></div>
          <div class="color-overlay"></div>
          </div>
          </div>		
        )
    }
}

export default Projects