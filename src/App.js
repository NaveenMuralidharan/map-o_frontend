import logo from './logo.svg';
import './App.css';
import Mermaid from "./Mermaid";
import example from "./example";

function App() {
  return (
    <div className="App">
      <h1>React Mermaid Example</h1>
      <Mermaid chart={example} />
    </div>
  );
}

export default App;
