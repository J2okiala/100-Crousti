import { useState } from "react";


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

    //Affichage
    return(
        <div>
            <h1>{titreAffiche} :</h1>
            {items.length === 0 && <p>Aucune {titreAffiche}</p>}
            <ul className="list-group">
                {items.map((ville,index) => (
                        <li key={index} onClick={()=>{setSelectedIndex(index);handleClick(ville);
                        }} className={"list-group-item" + (index === selectedIndex ? " active" : "")}>{ville}</li>
                    ))}
            </ul>

        </div>
        
    )
}
