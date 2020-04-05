import React, { Component } from 'react';

export default class SideDrawer extends Component {
  render() {
    let drawerClasses='sideDraw';
    if(this.props.show){
        drawerClasses= 'sideDraw open';
    }

    return (
      <nav className={drawerClasses}>
          <ul>
            {
              this.props.links.map((link) => (
                <li key={link.id}><a href={link.directory} >{link.pageName}</a></li>
              ))
            }
            <li><a href="tel:+447542274199">Phone</a></li>
            <li><a href="mailto:11tmisson@gmail.com">Email</a></li>
          </ul>
      </nav>
    )
  }
}
