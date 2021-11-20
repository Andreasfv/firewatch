import logo from '../../images/logo/logo.svg';
import './App.css';
import GetUsersTest from "./components/GetUsersTest"
import InfoTable from '../../components/frontpage/infoTable';
import { useState } from "react";
import MCanvas from './components/map/mCanvas';

function App() {
  console.log(process.env.DB_URL)
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      
      <header className="App-header">
        <p>
          Map over wildfires in the Montesinho Park. Click the squares for more info.
        </p>
        <MCanvas width="886px" height="549px"/>
      </header>
    </div>
  );
}

export default App;
