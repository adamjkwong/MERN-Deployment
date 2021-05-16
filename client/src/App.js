import Main from './views/Main';
import { Router } from "@reach/router";
import SinglePetDisplay from './components/SinglePetDisplay';
import SinglePetEdit from './components/SinglePetEdit';
import PetForm from './components/PetForm';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <PetForm path="/pets/new"/>
        <SinglePetDisplay path="/pets/:id"/>
        <SinglePetEdit path="pets/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;
