import { MouseEvent } from "react";

export default function ListGroup(){

    const villes: string[] = ['Monaco', 'Paris', 'Reims', 'Lyon', 'Bordeaux']
    // villes = []

    const handleClick = (event: MouseEvent) => console.log(event);
    
    //Affichage
    return(
        // rendue conditionnel
        <div>
            {villes.length === 0 && <p>Aucune ville</p>}
            <ul className="list-group">
                {villes.map((ville,index) => (
                        <li key={index} onClick={handleClick} className="list-group-item">{ville}</li>
                    ))}
            </ul>

        </div>
        
    )
}