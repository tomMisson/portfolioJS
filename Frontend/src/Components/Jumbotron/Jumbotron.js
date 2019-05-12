import React from 'react'
import { ScrollTo } from "react-scroll-to";

export default class Jumbotron extends React.Component {

    render() {
    return (
        <div className="jumbotron-container">
            <div className="information-collection">
                <h1 style={{textShadow: "2px 0px 2px rgba(0,0,0,0.5)"}}>TOM MISSON</h1>
                <div className="avatar">
                    <img src={this.props.information.avatar} alt="Avatar" width="250" height="250" className = "avatar-position" style={{borderRadius:"50%", boxShadow: "1px 0px 5px rgba(0,0,0,0.5)"}}/>
                </div>
                <h3 style={{textShadow: "2px 0px 2px rgba(0,0,0,0.5)"}}>{this.props.information.tagline}
                <div className="read-more-scroll">
                <br></br>
                    <ScrollTo >
                        {({ scrollTo }) => (
                        <button onClick={() => window.scroll({top:500, behavior: 'smooth' })}>&#x21a1;Read More&#x21a1;</button>
                        )}
                    </ScrollTo>
                </div>
                </h3>
            </div>    
        </div>
    )}
}
