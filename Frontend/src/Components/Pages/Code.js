import React, { Component } from 'react'

export default class Code extends Component {

  state = {
      projects:[]
  }

  componentDidMount(){
    fetch('/api/git-projects')
    .then(res => res.json(res))
    .then(project => this.setState({ projects: project}))
  }

  render() {
    return (
        <main>
            <h1>Code</h1>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Language</th>
                  <th>Forks</th>
                  <th>Stars</th>
                </tr>
              </thead>
              <tbody>
              {this.state.projects.map(project =>
                <tr key={project.id}>
                  <td><a alt="project link" href={project.url}>{project.name}</a></td>
                  <td>{project.desc}</td>
                  <td>{project.lang}</td>
                  <td>{project.forks}</td>
                  <td>{project.stars}</td>
                </tr>
              )}
              </tbody>
            </table>
        </main>
    )
  }
}