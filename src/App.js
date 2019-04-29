import React from 'react';
import './App.css';
//import Qualifications from './Components/Qualifications/Qualifications';
import Navbar from './Components/Navbar/Navbar';
import SideDraw from './Components/Navbar/SideDrawer/SideDrawer';
import Backdrop from './Components/Backdrop/Backdrop';
import Jumbotron from './Components/Jumbotron/Jumbotron';
import Footer from './Components/Footer/Footer';
import InfoPanel from './Components/Panel/InfoPanel';

import Email from './Media/Social/email.png';
import Github from './Media/Social/github.png';
import LinkedIn from "./Media/Social/linkedin.png";
import Twitter from'./Media/Social/twitter.png';
import Snapchat from "./Media/Social/snapchat.png";
import Instagram from "./Media/Social/instagram.png";
import JumboBG from './Media/Jumbotron/Background.jpg';
import ProfilePic from './Media/Jumbotron/profile.jpg';
import ProjectPanel from './Components/Panel/ProjectPanel';

class App extends React.Component {

  state = {
    qualifications:[
        {"_id":{"$oid":"5cb8f13d7e92601e2c8ba74c"},"Course":"Computer Science","Type":"AS-level","Grade":"C","Issuer":"Eduquas","Examination date":"June 2017","Course code":"601/5302/7"},
        {"_id":{"$oid":"5cb8f3b4e8313d2597f94c83"},"Course":"Business","Type":"AS-level","Grade":"B","Issuer":"AQA","Examination date":"June 2017","Course code":"601/4337/X"},
        {"_id":{"$oid":"5cb8f3c1e8313d2597f94c84"},"Course":"Mathematics","Type":"AS-level","Grade":"B","Issuer":"AQA","Examination date":"June 2017","Course code":"100/3405/5"},
        {"_id":{"$oid":"5cb8f57001df3b1e2c3eec23"},"Course":"Mathematics","Type":"GCSE","Grade":"A","Issuer":"Edexcel","Examination date":"June 2016","Course code":"500/7916/5"},
        {"_id":{"$oid":"5cb8f5c601df3b1e2c3eec24"},"Course":"Physics B","Type":"GCSE","Grade":"A*","Issuer":"OCR","Examination date":"June 2016","Course code":"600/1149/X"},
        {"_id":{"$oid":"5cb8f5fc01df3b1e2c3eec25"},"Course":"Biology B","Type":"GCSE","Grade":"A","Issuer":"OCR","Examination date":"June 2016","Course code":"600/1168/3"},
        {"_id":{"$oid":"5cb8f62801df3b1e2c3eec26"},"Course":"Chemistry B","Type":"GCSE","Grade":"A","Issuer":"OCR","Examination date":"June 2016","Course code":"600/1071/X"},
        {"_id":{"$oid":"5cb8f64b01df3b1e2c3eec27"},"Course":"Computing","Type":"GCSE","Grade":"A","Issuer":"OCR","Examination date":"June 2016","Course code":"500/8291/7"},
        {"_id":{"$oid":"5cb8f6ea01df3b1e2c3eec28"},"Course":"Religious Studies","Type":"GCSE","Grade":"A","Issuer":"WJEC","Examination date":"June 2016","Course code":"500/4585/4"},
        {"_id":{"$oid":"5cb8f71701df3b1e2c3eec29"},"Course":"English Language","Type":"GCSE","Grade":"B","Issuer":"WJEC","Examination date":"June 2016","Course code":"601/3156/1"},
        {"_id":{"$oid":"5cb8f81101df3b1e2c3eec2a"},"Course":"English Literature","Type":"GCSE","Grade":"B","Issuer":"WJEC","Examination date":"June 2015","Course code":"600/9507/6"},
        {"_id":{"$oid":"5cb8f92401df3b1e2c3eec2b"},"Course":"History","Type":"GCSE","Grade":"A","Issuer":"AQA","Examination date":"June 2016","Course code":"601/0269/X"},
        {"_id":{"$oid":"5cb8f93f01df3b1e2c3eec2c"},"Course":"French","Type":"GCSE","Grade":"B","Issuer":"AQA","Examination date":"June 2016","Course code":"500/4470/9"},
        {"_id":{"$oid":"5cb8fb7b7e92601e2c8ba751"},"Course":"V100","Type":"Accreditation","Issuer":"vInspired","Issue date":{"$date":{"$numberLong":"1507071600000"}},"Certificate number":"VH00751"},
        {"_id":{"$oid":"5cb8fc3e01df3b1e2c3eec2d"},"Course":"V50","Type":"Accreditation","Issuer":"vInspired","Issue date":{"$date":{"$numberLong":"1507071600000"}},"Certificate number":"VF10140"},
        {"_id":{"$oid":"5cb8fc5c01df3b1e2c3eec2e"},"Course":"V30","Type":"Accreditation","Issuer":"vInspired","Issue date":{"$date":{"$numberLong":"1507071600000"}},"Certificate number":"VT07519"},
        {"_id":{"$oid":"5cb8fc7a01df3b1e2c3eec2f"},"Course":"V10","Type":"Accreditation","Issuer":"vInspired","Issue date":{"$date":{"$numberLong":"1507071600000"}},"Certificate number":""},
        {"_id":{"$oid":"5cb8fd7b01df3b1e2c3eec30"},"Course":"First aid training","Type":"Accreditation","Issuer":"St John Ambulance","Issue date":{"$date":{"$numberLong":"1470178800000"}},"Expiry date":{"$date":{"$numberLong":"1564700400000"}},"Delegate number":"5699626","Certificate number":"1600242538"},
        {"_id":{"$oid":"5cb901d18b3957274c11bbd7"},"Course":"Fundamentals of Digital Marketing","Type":"Accreditation","Issuer":"Open university & Google","Issue date":{"$date":{"$numberLong":"1547938800000"}},"Certificate number":"7KB 6RC HDV"}
    ],
    projects:[
      {"_id":{"$oid":"5cb9cee80f1dc12d7044f718"},"Name":"Digital Living","Status":"In progress","Description":"By being inspired by the idea of futuristic home's where everything can be controlled through your voice or a pad on the wall, I am always looking at ways to change, control, makeover and enjoy living in the future as more IOT devices are released!","Tags":["Smartthings","Hue","Spotify","Chromecast","Raspberry Pi","Sensors"],"Language":["Python","HTML","CSS","JS"]},
      {"_id":{"$oid":"5cb9dfb5ae584e2d702e0ade"},"Name":"E-portfolio re-model","Status":"In progress","Description":"Re-working my original E-portfolio to be able to pull documents from a NoSQL database and render out content from them.","Tags":["Web apps","Personal","E-portfolio"],"Language":["JS"]}      
    ],
    internallinks:[
      {id:1, pageName:"Codebase",directory:"/code"},
      {id:2,pageName:"Qualifications",directory:"/qualifications"},
      {id:3,pageName:"Photography",directory:"/photos"},
      {id:4,pageName:"Contact",directory:"/contact"},
    ],
    externallinks:[
      {id:1, pageName:"Email",directory:"/contact", image:Email},
      {id:2, pageName:"Github",directory:"https://github.com/tomMisson", image:Github},
      {id:3, pageName:"LinkedIn",directory:"https://www.linkedin.com/in/thomasmisson/", image:LinkedIn},
      {id:4, pageName:"Twitter",directory:"https://twitter.com/thomasmisson", image:Twitter},
      {id:5, pageName:"Snapchat",directory:"https://www.snapchat.com/add/tommisson", image:Snapchat},
      {id:6, pageName:"Instagram",directory:"https://www.instagram.com/tommisson/", image:Instagram},
    ],
    jumbotron:{
      background:JumboBG,
      avatar:ProfilePic,
      tagline: "FULL STACK DEVELOPER & AMATEUR PHOTOGRAPHER TAUGHT THROUGH PASSION, COMMITMENT & A LOT OF FUN"
    },
    sideDrawerOpen: false,
    statement:"The ability to change the way that people interact with data and technology led me to pursue Software Engineering as a field of study and eventual career. My aim is to be able to produce software at any point within the stack in my work life and at home, live in an environment surrounded and controlled by tech.",
  }

  drawToggleClickHandler = () =>{
    this.setState((prevState)=> {return{sideDrawerOpen: !prevState.sideDrawerOpen}})
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen:false});
  };    

  render(){
    let backdrop;
    if(this.state.sideDrawerOpen)
    {
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }


    return (
      <div className="App" style = {{height:"100%"}}>
        <Navbar drawerClickHandler={this.drawToggleClickHandler} links={this.state.internallinks}/>
        <SideDraw show ={this.state.sideDrawerOpen} links={this.state.internallinks}/>
        {backdrop}

        <main>
          <Jumbotron information={this.state.jumbotron}/>
          <InfoPanel statement={this.state.statement}/>
          <ProjectPanel projectsList={this.state.projects}/>
        </main>


        <Footer show ={this.state.sideDrawerOpen} outlinks={this.state.externallinks} inlinks={this.state.internallinks}/>
        {/*Qualifcations view
          <ul>
            <Qualifications qualifications={this.state.qualifications}/>
          </ul>*/}
      </div>
    );
  }
}

export default App;
