import React from 'react';
import './App.css';

import Email from './Media/Social/email.png';
import Github from './Media/Social/github.png';
import LinkedIn from "./Media/Social/linkedin.png";
import Twitter from './Media/Social/twitter.png';
import Snapchat from "./Media/Social/snapchat.png";
import Instagram from "./Media/Social/instagram.png";
import Home from './Components/Home';


class App extends React.Component {

    state = {
        externallinks: [
            { id: 1, pageName: "Email", directory: "mailto:hi@tommisson.uk", image: Email },
            { id: 2, pageName: "Github", directory: "https://github.com/tomMisson", image: Github },
            { id: 3, pageName: "LinkedIn", directory: "https://www.linkedin.com/in/thomasmisson/", image: LinkedIn },
            { id: 4, pageName: "Twitter", directory: "https://twitter.com/thomasmisson", image: Twitter },
            { id: 5, pageName: "Snapchat", directory: "https://www.snapchat.com/add/tommisson", image: Snapchat },
            { id: 6, pageName: "Instagram", directory: "https://www.instagram.com/tommisson/", image: Instagram },
        ]
    }


    render(){
        return ( 
            <div className="App">
                <Home/>
            </div>
        );
    }
}

export default App;