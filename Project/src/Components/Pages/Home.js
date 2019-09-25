import InfoPanel from '../Panel/InfoPanel';
import Jumbotron from '../Jumbotron/Jumbotron';
import ProjectPanel from '../Panel/ProjectPanel';
import JumboBG from '../../Media/Jumbotron/Background.jpg';
import ProfilePic from '../../Media/Jumbotron/profile.jpg';

import React, { Component } from 'react'

export default class Home extends Component {

    state={
        jumbotron:{
        background:JumboBG,
        avatar:ProfilePic,
        tagline: "FULL STACK DEVELOPER & AMATEUR PHOTOGRAPHER TAUGHT THROUGH PASSION, COMMITMENT & A LOT OF FUN"
        },
        projects:[
            {"_id":{"$oid":"5cb9cee80f1dc12d7044f718"},"Name":"Digital Living","Status":"Constant","Description":"By being inspired by the idea of futuristic home's where everything can be controlled through your voice or a pad on the wall, I am always looking at ways to change, control, makeover and enjoy living in the future as more IOT devices are released!","Tags":["Smartthings","Hue","Spotify","Chromecast","Raspberry Pi","Sensors"],"Language":["Python","HTML","CSS","JS"]},
            {"_id":{"$oid":"5cb9dfb5ae584e2d702e0ade"},"Name":"E-portfolio re-model","Status":"Done!","Description":"Re-working my original E-portfolio to be able to pull documents from a NoSQL database and render out content from them.","Tags":["Web apps","Personal","E-portfolio"],"Language":["JS"]},
            {"_id":{"$oid":"5cb9dfb5ae584e2d702e0adf"},"Name":"Security camera 2.0","Status":"In progress","Description":"Turning a Raspberry pi Zero in to a portable CCTV camera with sensehat and motion sensor and camera module so that it can be moved around the house and have a web interface for it","Tags":["Personal","CCTV", "Raspberry Pi", "SenseHat", "Camera"],"Language":["Python"]},      
        ],
        statement:"The ability to change the way that people interact with data and technology led me to pursue Software Engineering as a field of study and eventual career. My aim is to be able to produce software at any point within the stack in my work life and at home, live in an environment that adapts to me and how I need it to (eventually without me needing to tell it to!).",

    }

    render() {
        return(
            <main>
                <Jumbotron information={this.state.jumbotron}/>
                <InfoPanel statement={this.state.statement}/>
                <ProjectPanel projectsList={this.state.projects}/>
            </main>
        );
    }
}
