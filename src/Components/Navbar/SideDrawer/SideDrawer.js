import React, { Component } from 'react'

export default class SideDrawer extends Component {
  render() {
    let drawerClasses='sideDraw';
    if(this.props.show){
        drawerClasses= 'sideDraw open';
    }

    return (
      <nav className={drawerClasses}>
          <ul>
                <li><a href="/">Codebase</a></li>
                <li><a href="/">Qualifications</a></li>
                <li><a href="/">Photography</a></li>
                <li><a href="/">Contact</a></li>
          </ul>
      </nav>
    )
  }
}
