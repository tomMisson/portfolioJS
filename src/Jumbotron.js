import React from 'react'
import $ from 'jquery'

export default class Jumbotron extends React.Component {

    scrollToDiv() {
        $("#scrollBtn").click(function() {
            $('html,body').animate({
                scrollTop: $(".dark-panel").offset().top-70},
                'slow');
        });
    }

    render() {
    return (
        <div className="jumbotron-container">
            <div className="information-collection">
                <h1 style={{textShadow: "2px 0px 2px rgba(0,0,0,0.5)"}}>TOM MISSON</h1>
                <div className="avatar">
                    <img src={this.props.information.avatar} alt="Avatar" width="250" height="250" className = "avatar-position" style={{borderRadius:"50%", boxShadow: "1px 0px 5px rgba(0,0,0,0.5)"}}/>
                </div>
                <h3 style={{textShadow: "2px 0px 2px rgba(0,0,0,0.5)"}}>{this.props.information.tagline}</h3>
                <a href="https://docs.google.com/document/d/1Kqr4zAkT3qddC5qceM1zHs8fDvMlOnNuGzAasCxdM9c/export?format=pdf" download="TomMisson_CV.pdf"><button className="" type="submit">Hire me!</button></a>
            </div>    
        </div>
    )}
}
