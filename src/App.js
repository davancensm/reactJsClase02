import './App.css';

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer/>
        <ItemCount stock={5} initial={1} onAdd={() => console.log('Articulo agregado')}/>
    </div>
  );
}

export default App;
