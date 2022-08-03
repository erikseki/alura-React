import React from 'react';
import style from './Botao.module.scss';

class Botao extends React.Component <{children : any,
     type?: "button" | "submit" | "reset" | undefined,
     onClick?: () => void

}
>  { // como ja tinha o children, apenas coloquei o tipo de button do lado
    render() {
        const {type = "button", onClick} = this.props
        return (
            <button onClick={onClick} type ={type} className={style.Botao}>
                {this.props.children} 
            </button>
        )  
    }
}

export default Botao;
