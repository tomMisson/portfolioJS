import React, { Component } from 'react'

export default class Services extends Component {
    
    state={
        serviceList:[
            {name:"Web hosting",details:""},
            {name:"Bespoke software",details:""},
        ]
    }

    
    render() {
        return (
            <main>
                <h1>Services</h1>
                {this.state.serviceList.map((service) =>

                    <section>
                        <h2>{service.name}</h2>
                        <p>{service.details}</p>
                    </section>
                    
                )}

            </main>
        )
    }
}
