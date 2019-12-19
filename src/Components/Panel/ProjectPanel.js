import React from 'react'

export default class ProjectPanel extends React.Component {

  render() {
    return (
      <section className = "light-panel">
        <div className="light-panel-container">
          <h2>MY PROJECTS</h2>
          <br/>
          <table>
            <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Description</th>
              <th>Tags</th>
              <th>Language</th>
            </tr>
            </thead>
            <tbody>
            {
                this.props.projectsList.map((project) => (
                    <tr key={project._id.$oid}>
                        <td>{project.Name}</td>
                        <td>{project.Status}</td>
                        <td>{project.Description}</td>
                        <td>{project.Tags.join(', ')}</td>
                        <td>{project.Language.join(', ')}</td>
                    </tr>
                ))
            }
            </tbody>
          </table>
        
            <br/><br/>

            <div className="bulletList">
                <h2>THINGS TO LEARN</h2>
                <br/>
                <ul>
                    <li>Dockerized containers/microservices</li>
                    <li>Image/facial recognition using GCP</li>
                    <li>Building myIoT network</li>
                    <li>Make an Iot locally hosted controller</li>
                    <li>File server over website</li>
                    <li>E-portfolio backend</li>
                    <li>Try to bake a cake</li>
                </ul>
            </div>
        </div>
      </section>
    )
  }
}