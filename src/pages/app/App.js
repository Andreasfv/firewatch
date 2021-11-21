import './App.css';
import GetUsersTest from "./components/GetUsersTest"
import InfoTable from '../../components/frontpage/infoTable';
import { useState } from "react";
import MCanvas from './components/map/mCanvas';
import InfoPanel from './components/infoPanel/infoPanel';
import InputModal from './components/inputModal/inputModal';

function App() {
  const [show, setShow] = useState(true);
  const [hoverData, setHoverData] = useState({hovered: false, data: null})
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="App">
      
      <header className="App-header">
        <p>Map over wildfires in the Montesinho Park. </p>
        <p>Hover your mouse over the squares for more info.</p>
        <div>
          <MCanvas setHoverData = {setHoverData} width="886px" height="549px"/>
          <InfoPanel data = {hoverData} />
        </div>
        <button onClick={()=>{handleOpen()}}>Add new fire </button>
        <InputModal open = {open} handleClose={handleClose} />
      </header>
    </div>
  );
}

export default App;
