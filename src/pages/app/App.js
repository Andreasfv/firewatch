import './App.css';
import GetUsersTest from "./components/GetUsersTest"
import InfoTable from '../../components/frontpage/infoTable';
import { useState } from "react";
import MCanvas from './components/map/mCanvas';
import InfoPanel from './components/infoPanel/infoPanel';

function App() {
  const [show, setShow] = useState(true);
  const [hoverData, setHoverData] = useState({hovered: false, data: null})
  return (
    <div className="App">
      
      <header className="App-header">
        <p>
          Map over wildfires in the Montesinho Park. Click the squares for more info.
        </p>
        <div>
          <MCanvas setHoverData = {setHoverData} width="886px" height="549px"/>
          <InfoPanel data = {hoverData} />
        </div>
      </header>
    </div>
  );
}

export default App;
