import style from '../Lista.module.scss'

export default function Item({tarefa, tempo}: {tarefa:string, tempo:string}){ //destruturação do props

    return(
    <li className={style.item}>
        <h3>{tarefa}</h3>
        <span>{tempo}</span>
    </li>
    )
}