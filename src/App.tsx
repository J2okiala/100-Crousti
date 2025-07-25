import './App.css'
import ListGroup from './components/ListGroup'

function App() {


  let items: string[] = ['Paris', 'Reims'];
  items = ['Paris', 'Reims', 'Nantes'];

  const Onclick = (items: string) =>{
    console.log(items)
  };




  return(
    <div>
      <ListGroup items={items} titre={{pluriel:"Villes", singulier:"Ville"}} handleClick={Onclick}/>
    </div>
  )
}

export default App
