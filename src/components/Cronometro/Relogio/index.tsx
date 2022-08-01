import React from "react";
import style from './Relogio.module.scss';

interface Props{
    tempo: number | undefined;
}

export default function Relogio({ tempo= 0} : Props){
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60; 
    const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0');  
    const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0');
    return( // com o React.Fragment, os span's não tem problema de elemento pai no DOM 
         <React.Fragment> 
             <span className={style.relogioNumero}>{minutoDezena}</span>
             <span className={style.relogioNumero}>{minutoUnidade}</span>
             <span className={style.relogioDivisao}>:</span>
             <span className={style.relogioNumero}>{segundoDezena}</span>
             <span className={style.relogioNumero}>{segundoUnidade}</span>
         </React.Fragment>
    )
}