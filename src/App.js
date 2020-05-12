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
        tagline: "<p>💻 Software Dev •<a title='Blog' href='https://blog.tommisson.uk'> ✍️ Blogger </a>• <a title='Twilio' href='https://www.twilio.com/champions'>🏆 Twilio Champion</a> • <a title='helloHackers' href='https://hellohackers.co.uk'>👋 helloHackers Society Vice-Chair </a> • <a title='Hackathons Wiki' href='https://hack.athon.uk'> 🧰 Toolkit manager at Hackathons_UK </a>• 😍 Emoji enthusiast</p>"
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