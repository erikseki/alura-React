import React from 'react';

class Botao extends React.Component {
    render() {
        // const color= "red" variaveis tbm funcionam no css 
        return (
            <button style={{
                backgroundColor:'blue'
            }}>
                Botão 
            </button>
        )  
    }
}

export default Botao;