import React from 'react'
import DrawToggleButton from './SideDrawer/DrawToggleButton';

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
                        <li><a href="/">Codebase</a></li>
                        <li><a href="/">Qualifications</a></li>
                        <li><a href="/">Photography</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
    }
}
