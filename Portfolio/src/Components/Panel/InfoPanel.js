import React from 'react'

export default class InfoPanel extends React.Component {

  render() {
    return (
      <section className = "dark-panel">
      
        <div className="bulletList">
          <h2>TECHNICAL SKILLS</h2>
          <br/>
          <ul>
            <li>Software development</li>
            <ul>
              <li>Web - React, NodeJS, Express, Flask, PHP, JavaScript</li>
              <li>Desktop - Java and Python</li>
              <li>Databases - MongoDB, MariaDB, Oracle SQL</li>
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
              <li>Working on some prototype IoT stuff</li>
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
            <li>Hackathons</li>
            <li>Machine learning</li>
            <li>Automation and efficiency</li>
            <li>Landscape and nature photography</li>
          </ul>
        </div>
        <br/>
        <a href="https://docs.google.com/document/d/1Kqr4zAkT3qddC5qceM1zHs8fDvMlOnNuGzAasCxdM9c/export?format=pdf" download="TomMisson_CV.pdf"><button type="submit">Download my CV</button></a>
      </section>
    )
  }
}
