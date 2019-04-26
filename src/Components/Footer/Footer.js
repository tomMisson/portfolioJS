import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer>
          <div className="social">
            <ul>
                {
                    this.props.outlinks.map((link) => (
                    <li key={link.id}><a href={link.directory} ><img src={link.image} alt="Social network" height="50" width="50"/></a></li> 
                    ))
                }
            </ul>
          </div>
          <div className="links">
            <ul>
                {
                    this.props.inlinks.map((link) => (
                <li key={link.id}><a href={link.directory} >{link.pageName}</a></li> 
                ))
                }
            </ul>
          </div>
          <p></p>
      </footer>
    )
  }
}
