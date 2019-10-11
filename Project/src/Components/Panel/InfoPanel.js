import React from 'react'
import cv from '../../Media/cv.pdf'

export default class InfoPanel extends React.Component {

  render() {
    return (
      <section className = "dark-panel">
      
        <div className="bulletList">
          <h2>TECHNICAL SKILLS</h2>
          <br/>
          <ul>
            <li>Application development</li>
            <ul>
              <li>Web - MERN stack, MVC5 framework for .NET</li>
              <li>Desktop - Java and Python</li>
              <li>Preference of web based applications</li>
            </ul>
            <li>Network & infrastructure</li>
            <ul>
              <li>Managed Windows and Linux operating systems for servers. </li>
              <li>Maintained and created MongoDB and SQL databases.</li>
            </ul>
            <li>Hardware</li>
            <ul>
              <li>Built servers and PC's  </li>
              <li>Currently manage an IoT network with smart bulbs, sensors and sound system.</li>
            </ul>
          </ul>
        </div>
        <br/><br/>
        <div>
          <h2>ABOUT ME</h2>
          <br/>
          <p>{this.props.statement}</p>
        </div>
        <br/><br/>
        <div className="bulletList">
          <h2>HOBBIES & INTERESTS</h2>
          <br/>
          <ul>
            <li>Machine learning</li>
            <li>Automation and efficiency</li>
            <li>Landscape and nature photography</li>
            <li>Cycling</li>
            <li>Cooking</li>
          </ul>
        </div>
        <br/>
        <a href={cv} download="TomMisson_CV.pdf"><button type="submit">Download my CV</button></a>
      </section>
    )
  }
}
