import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import Qualifications from './Components/Qualifications/Qualifications';

import home from './Components/Pages/Home';
import code from './Components/Pages/Code';
import error from './Components/Pages/Error';
import qualifications from './Components/Pages/Qualifications';
import services from './Components/Pages/Services';

import Navbar from './Components/Navbar/Navbar';
import SideDraw from './Components/Navbar/SideDrawer/SideDrawer';
import Backdrop from './Components/Backdrop/Backdrop';
import Footer from './Components/Footer/Footer';

import Email from './Media/Social/email.png';
import Github from './Media/Social/github.png';
import LinkedIn from "./Media/Social/linkedin.png";
import Twitter from './Media/Social/twitter.png';
import Snapchat from "./Media/Social/snapchat.png";
import Instagram from "./Media/Social/instagram.png";


class App extends React.Component {

    state = {
        internallinks: [
            { id: 0, pageName: "Home", directory: "/" },
            { id: 1, pageName: "Codebase", directory: "/code" },
            { id: 2, pageName: "Qualifications", directory: "/qualifications" },
            { id: 3, pageName: "Services", directory: "/services" },
            ],
        externallinks: [
            { id: 1, pageName: "Email", directory: "/contact", image: Email },
            { id: 2, pageName: "Github", directory: "https://github.com/tomMisson", image: Github },
            { id: 3, pageName: "LinkedIn", directory: "https://www.linkedin.com/in/thomasmisson/", image: LinkedIn },
            { id: 4, pageName: "Twitter", directory: "https://twitter.com/thomasmisson", image: Twitter },
            { id: 5, pageName: "Snapchat", directory: "https://www.snapchat.com/add/tommisson", image: Snapchat },
            { id: 6, pageName: "Instagram", directory: "https://www.instagram.com/tommisson/", image: Instagram },
        ],
        sideDrawerOpen: false,
    }

    drawToggleClickHandler = () => {
        this.setState((prevState) => { return { sideDrawerOpen: !prevState.sideDrawerOpen } })
    };

    backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false });
    };

    render() {
        let backdrop;
        if (this.state.sideDrawerOpen) {
            backdrop = < Backdrop click = { this.backdropClickHandler }
            />
        }


        return ( 
            <div className="App">
                <BrowserRouter>
                <Navbar drawerClickHandler={this.drawToggleClickHandler} links={this.state.internallinks}/>
                <SideDraw show ={this.state.sideDrawerOpen} links={this.state.internallinks}/>
                {backdrop}

                <Switch>
                    <Route path="/" component={home} exact/>
                    <Route path="/code" component={code}/>
                    <Route path="/qualifications" component={qualifications}/>
                    <Route path="/services" component = {services}/>
                    <Route component={error}/>
                </Switch>
                
                <Footer show ={this.state.sideDrawerOpen} outlinks={this.state.externallinks} inlinks={this.state.internallinks}/>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;