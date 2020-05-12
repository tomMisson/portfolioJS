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
      console.log(this.state.projects);
      
  }

  render() {
    return (
        <section>
            <h2 className="dark-panel"> CODE</h2>
           
        </section>
    )
  }
}