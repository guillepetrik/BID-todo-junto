import React, { Component } from 'react';
class PersonCard extends Component {  
    constructor(props){
        super(props);
        this.state = { edad: props.edad };
    }
    sumar = ()=> {
        this.setState({edad: +this.props.edad +1});
    }        
    
    render () {
        const { nombre, apellido, colorCab }= this.props;
        return (
            <>
                <h1>{apellido}, {nombre}</h1>
                <p>Edad: { this.state.edad }</p>
                <p>Color de cabello: {colorCab}</p>
                <button onClick={ this.sumar }>Boton de cumpleanos para {nombre} {apellido}</button>
            </>
        );
    }
}
export default PersonCard;