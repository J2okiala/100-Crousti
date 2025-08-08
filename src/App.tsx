
import { useState } from 'react';
import './App.css';


function App() {
  const [drink, setDrink] = useState({title: "Daiquiri", price: 5});

  const handleClick =() => {
    drink.price ++; 
    console.log(drink.price);
    
    const drink2 = {...drink};
    setDrink(drink2)// Créer un objet drink et le remplacé Utiliser le spred operator
    console.log(drink2.price);
  };

        return (
        <div>
          <h2>{drink.title}</h2>
          <h2>{drink.price}</h2>
          <button onClick={handleClick} >Click1</button>
        </div>
    )
  


}

export default App

// Un composant react Menu (tu peux t'inspirer des menus de bootstrap)