import React from 'react';

export default class CardWithClass extends React.Component {

    state = {
        contador: 1,
    }
    

    sumar = () => {
        this.setState({contador : this.state.contador + 1});
    }

    restar = () => {
        this.setState({contador : this.state.contador - 1});
    }

    componentDidMount(){
        console.log('Hola, ya estoy renderizado');
        this.setState({contador : this.state.contador + 1});
    }
    componentDidUpdate(){
        console.log('Ya cambié')
    }

    render(){
        return(
        <div>
            Hola Coder. 
            <h1>{this.state.contador}</h1>
            <button onClick={this.sumar}>+</button>
            <button onClick={this.restar}>-</button>
        </div>)
    } 
}