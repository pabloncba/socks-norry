
import './App.css';
import ItemListContainer from './Components/ItemsListContainer/itemListContainer';
import NavBar from './Components/navbar/navbar'



function App() {

  const props = {

    nombre: "Pablo", edad:"36"

  }

  return (

   
    <div>

      <NavBar />
      <ItemListContainer nombre="Pablo" />
  
        <h2>Hola React</h2>
      
    </div>
  );
}

export default App;
