import Jumbotron from './Jumbotron/Jumbotron';
import JumboBG from '../Media/Jumbotron/Background.jpg';
import ProfilePic from '../Media/Jumbotron/profile.jpg';

import React, { Component } from 'react'

export default class Home extends Component {

    state={
        jumbotron:{
        background:JumboBG,
        avatar:ProfilePic,
        tagline: "TECH EVANGELIST, FULL STACK DEVELOPER, HACKATHON ORGANIZER"
        }
    }

    render() {
        return(
            <main>
                <Jumbotron information={this.state.jumbotron}/>
            </main>
        );
    }
}
