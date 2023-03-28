
import './App.css';

import {Outlet} from "react-router-dom"

function App() {
  return (
    // <div className="App">
    //   <h1>React Mermaid Example</h1>
    //   <Mermaid chart={example} />
    // </div>
     <div className="App">
     <Outlet/>
   </div>
  );
}

export default App;
