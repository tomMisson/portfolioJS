import React from 'react'

export default class Jumbotron extends React.Component {

    render() {
    return (
        <div className="jumbotron-container">
            <div className="information-collection">
                <h1>TOM MISSON</h1>
                <div className="avatar">
                    <img src={this.props.information.avatar} alt="Avatar" width="250" height="250" className = "avatar-position" style={{borderRadius:"50%"}}/>
                </div>
                <h3>{this.props.information.tagline}</h3>
            </div>    
        </div>
    )}
}
