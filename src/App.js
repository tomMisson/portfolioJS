import React from 'react';
import './App.css';
import Jumbotron from './Jumbotron';
import JumboBG from './Media/Jumbotron/Background.jpg';
import ProfilePic from './Media/Jumbotron/profile.jpg';


class App extends React.Component {

    state={
        jumbotron:{
        background:JumboBG,
        avatar:ProfilePic,
        tagline: "💻 Software Dev • ✍️ Blogger • 🏆 @twilio Champion • 👋 @helloHackerSoc Vice-Chair • 🧰 Toolkit manager @Hackathons_UK • 😍 Emoji enthusiast"
        }
    }

    render(){
        return ( 
            <main>
                <Jumbotron information={this.state.jumbotron}/>
            </main>
        );
    }
}

export default App;