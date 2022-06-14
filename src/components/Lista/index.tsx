
import { ITarefa } from "../../types/tarefa";
import Item from "./item";
import style from './Lista.module.scss';




function Lista({tarefas}: { tarefas: ITarefa[]}) {
    
    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
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