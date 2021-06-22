import React from 'react';

export default class ItemListContainer extends React.Component {
    
        state = {
            greeting : "Greeting Entregable clase 2"
        }
        render(){
            return(
                <div><h1>{this.state.greeting}</h1></div>
            )
        }

        
    }
