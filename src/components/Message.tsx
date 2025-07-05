
export default function Message() {

    //state

    //comportements
    const prenom: string = 'Joseph';

    //Affichage
    return (
        //condition ternaire
        <div>
            <h2>Message de: {prenom || 'toto'} </h2>
            <h2>Message de: {prenom ? prenom :'toto'} </h2>
            <h2>Message de: {prenom === '' ? 'Bonjour inconnue' : 'bonjour ' + prenom} </h2>
        </div>
    )
}