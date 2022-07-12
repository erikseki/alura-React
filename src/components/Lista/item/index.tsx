import { ITarefa } from '../../../types/tarefa'
import style from '../Lista.module.scss'

interface Props extends ITarefa{
    selecionaTarefa: (tarefaSelecionada : ITarefa) => void
}

export default function Item(
    {
    tarefa,
    tempo,
    selecionado,
    completado,
    id,
    selecionaTarefa
    }: Props){ //destruturação do props
    
    console.log('Item atual : ', {tarefa, tempo, selecionado, completado, id});
    return(
    <li 
    className={style.item} 
    onClick={() => selecionaTarefa(
        {
            tarefa,
            tempo,
            selecionado,
            completado,
            id
        }
    )}>
        
        <h3>{tarefa}</h3>
        <span>{tempo}</span>
    </li>
    )
}