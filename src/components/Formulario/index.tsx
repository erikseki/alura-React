import React from 'react';
import Botao from '../Botao';
import style from './Formulario.module.scss'

class Formulario extends React.Component {
    render(){
        return ( //  <div className={style["novaTarefa__-container"]}> outra maneira de adicionar o objeto com "-"
            <form className={style.novaTarefa}> 
                <div className={style.inputContainer}> 
                    <label htmlFor="tarefa">
                        adicione um novo estudo
                    </label>
                    <input
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        placeholder="o que você quer estudar ? "
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">
                        Tempo 
                    </label>
                    <input
                    type="time"
                    step="1"
                    name="tempo"
                    id="tempo"
                    min="00:00:00"
                    max="01:30:00"
                    required
                    /> 
                </div>
                <Botao>
                    Adicionar
                </Botao>
            </form>
        )
    }
}

export default Formulario 