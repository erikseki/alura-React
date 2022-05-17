import React from 'react';
import style from './Botao.module.scss';

class Botao extends React.Component <{children : any}> {
    render() {
        return (
            <button className={style.Botao}>
                {this.props.children} 
            </button>
        )  
    }
}

export default Botao;

// const color= "red" variaveis tbm funcionam no css 

/* o tipo children n estava aparecendo devido a versão 
 do react ou da IDE(vscode), coloquei o   <{children : any}>
 que aparentemente anula o erro  

ps : não sei se é viável utilizar esse tipo de sintax 
 */