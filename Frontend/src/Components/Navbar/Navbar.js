import React from 'react'
import DrawToggleButton from './SideDrawer/DrawToggleButton';
import {Link} from 'react-router-dom';

export default class Navbar extends React.Component {


    render() {
        return (
        <header className="toolbar">
            <nav className="toolbar_nav">
                <div className = "toolbar_toggle_button"> 
                    <DrawToggleButton click={this.props.drawerClickHandler}/>
                </div>
                <div className = "toolbar_logo">
                    <a href="/">TOM MISSON</a>
                </div>
                <div className="spacer"></div>
                <div className = "toolbar_navigation_items">
                    <ul>
                        {
                            this.props.links.map((link) => (
                                <li key={link.id}><Link to={link.directory} >{link.pageName}</Link></li>
                            ))
                        }
                    </ul>
                </div>
            </nav>
        </header>
    )
    }
}
