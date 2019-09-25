import React, { Component } from 'react'

export default class Contact extends Component {
  
  render() {
    return (
      <main>
          <h1>Get in touch</h1>
            <form action="/email" method="POST">
                <input type="text" name="forename" placeholder="Forename" className="forename" required/>
                <input type="text" name="surname" placeholder="Surname" className="surname"/>
                <input type="text" name="subject" placeholder="Subject" className="subject" required/>
                <textarea type="text" name="message" placeholder="Your message" className="message" required/>
                <input type="submit" value="Send it ➤" className="sendButton"/>
            </form>
      </main>
    )
  }
}
