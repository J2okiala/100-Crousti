
export default function ListGroup(){

    const villes: string[] = ['Monaco', 'Paris', 'Reims', 'Lyon', 'Bordeaux']

    //Affichage
    return(
        <ul className="list-group">
            {villes.map((ville,index) => (
                    <li key={index} className="list-group-item">{ville}</li>
                ))}
        </ul>
    )
}