import React, { useState } from "react";
import Item from "./item";
import style from './Lista.module.scss';

function Lista(){
    const [tarefas, setTarefas] = useState([{
        tarefa:'React',
        tempo:'02:00:00'
    }, {
        tarefa:'Javascript',
        tempo:'01:00:00'
    }, {
        tarefa:'Typescript',
        tempo:'03:00:00'
    }])
    return(
        <aside className={style.listaTarefas}>
            <h2 onClick={() => {
                setTarefas([...tarefas, {tarefa: "estudar estado", tempo: "5:00:00"}]); 
            }}>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                   <Item
                   key={index} 
                   {...item} // spread operator (destruturação do objeto com o "...") tomar cuidado com API caso tenha mt informação, ele pode puxar errado
                   // outra maneira de usar " tempo={item.tempo} "
                   />
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