import { useState } from "react";
import style from './ListGroup.module.css';


interface Props{
    items:string[];
    titre: {
        pluriel: string;
        singulier: string;
    };
    handleClick:(items: string) => void;

}


export default function ListGroup({items, titre, handleClick}:Props){

    const [selectedIndex, setSelectedIndex] = useState(0);

    const titreAffiche = items.length <= 1 ? titre.singulier : titre.pluriel;
    console.log(style);
    

    //Affichage
    return(
        <div>
            <h1 style={{color: 'blue'}}>{titreAffiche} :</h1>
            {items.length === 0 && <p>Aucune {titreAffiche}</p>}
            <ul className={style['list-group']}>
                {items.map((ville,index) => (
                        <li key={index} onClick={()=>{setSelectedIndex(index);handleClick(ville);
                        }} className={"list-group-item" + (index === selectedIndex ? " active" : "")}>{ville}</li>
                    ))}
            </ul>

        </div>
        
    )
}
