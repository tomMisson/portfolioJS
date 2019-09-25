import React, { Component } from 'react'

export default class DrawToggleButton extends Component {
  render() {
    return (
      <button className = "toggle_button" onClick={this.props.click}>
          <div className = "toggle_button_line"/>
          <div className = "toggle_button_line"/>
          <div className = "toggle_button_line"/>
      </button>
    )
  }
}
