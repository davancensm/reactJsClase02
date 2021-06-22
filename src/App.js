import './App.css';
import CardWithClass from './components/CardWithClass';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer/>
        <CardWithClass/>
    </div>
  );
}

export default App;
