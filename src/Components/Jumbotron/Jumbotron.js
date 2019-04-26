import React from 'react'
import { ScrollTo } from "react-scroll-to";

export default class Jumbotron extends React.Component {

    render() {
    return (
        <div className="jumbotron-container">
            <div className="information-collection">
                <h1 style={{textShadow: "3px 0px 7px rgba(0,0,0,0.5)"}}>TOM MISSON</h1>
                <div className="avatar">
                    <img src={this.props.information.avatar} alt="Avatar" width="250" height="250" className = "avatar-position" style={{borderRadius:"50%", boxShadow: "2px 0px 5px rgba(0,0,0,0.5)"}}/>
                </div>
                <h3 style={{textShadow: "3px 0px 7px rgba(0,0,0,0.5)"}}>{this.props.information.tagline}
                <br/><br/><br/><br/><br/><br/> &#x21a1; 
                <ScrollTo>
                    {({ scrollTo }) => (
                    <button onClick={() => window.scroll({top:500, behavior: 'smooth' })}>Read More</button>
                    )}
                </ScrollTo>
                &#x21a1;</h3>
            </div>    
        </div>
    )}
}
