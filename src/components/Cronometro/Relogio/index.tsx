import React from "react";
import style from './Relogio.module.scss';


export default function Relogio(){
    return( // com o React.Fragment, os span's não tem problema de elemento pai no DOM 
         <React.Fragment> 
             <span className={style.relogioNumero}>0</span>
             <span className={style.relogioNumero}>0</span>
             <span className={style.relogioDivisao}>:</span>
             <span className={style.relogioNumero}>0</span>
             <span className={style.relogioNumero}>0</span>
         </React.Fragment>
    )
}