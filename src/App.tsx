import './App.css';
import {Creator} from './Creator'
import { choice } from './utils';

const names = `Codo
Codit
Codoid
Codoc
Codee
Codum
Codude
Codor
Codim
Codil
Codon
Codox
Codux
Codid
Coddity`.split('\n')

function App() {
  return (
    <div className="App">
      <header className="App-header">
          {choice(names)} Creator
      </header>
      <Creator />
    </div>
  );
}

export default App;
