import './App.css'
import Alert from './components/Alert';
import ListGroup from './components/ListGroup'

function App() {


  let items: string[] = ['Paris', 'Reims'];
  items = ['Paris', 'Reims', 'Nantes'];


  return(
    <div>
      <ListGroup items={items} titre={{pluriel:"Villes", singulier:"Ville"}} handleClick={(items: string) =>{
      console.log(items)
    }
  }/>
      <Alert><h1>Hello</h1></Alert>
    </div>
  )
}

export default App

// Un composant react Menu (tu peux t'inspirer des menus de bootstrap)