import Main from './views/Main';
import { Router } from "@reach/router";
import SinglePetDisplay from './components/SinglePetDisplay';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <SinglePetDisplay path="/edit/:id"/>
      </Router>
    </div>
  );
}

export default App;
