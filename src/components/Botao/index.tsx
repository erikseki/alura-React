import React from 'react';
import './style.scss'

class Botao extends React.Component {
    render() {
        // const color= "red" variaveis tbm funcionam no css 
        return (
            <button className='botao'>
                Botão 
            </button>
        )  
    }
}

export default Botao;