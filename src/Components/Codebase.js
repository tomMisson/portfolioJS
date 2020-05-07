import React, { Component } from 'react'

export default class Codebase extends Component {

  state = {
    projects:[]
  }

  componentDidMount(){
    this.getData()
  }

  getData = async () =>
  {
    await fetch("https://api.github.com/users/tomMisson/repos")
      .then(res => res.json())
      .then(res => this.setState({projects:res}))
  }

  render() {
    return (
        <section>
            <h2 className="dark-panel"> CODE</h2>
            <table className="codeTable">
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
                  <td>{project.description}</td>
                  <td>{project.language}</td>
                  <td>{project.forks}</td>
                  <td>{project.stargazers_count}</td>
                </tr>
              )}
              </tbody>
            </table>
        </section>
    )
  }
}