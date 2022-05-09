import React from "react";
import './style.scss';

function Lista(){
    const tarefas = [{
        tarefa:'React',
        tempo:'02:00:00'
    }, {
        tarefa:'Javascript',
        tempo:'01:00:00'
    }, {
        tarefa:'Typescript',
        tempo:'03:00:00'
    }]
    return(
        <aside className="listaTarefas">
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <li key={index} className="item">
                        <h3>{item.tarefa}</h3>
                        <span>{item.tempo}</span>
                    </li>
                ))}
                
            </ul>
        </aside>
    )
}

export default Lista


/* 
 modelo do stateless component com a arrow function
 
 const Lista = () => (

  <li>
      item...
  </li>   

    )
*/

/*
    renderizando o map, ele precisa saber qual item do array corresponde à renderização
    do DOM, para isso usamos uma chave chamada Key pra conseguir linkar um ao outro. 
    (quando renderizamos uma lista de itens, o react pede para usar uma key)  
*/