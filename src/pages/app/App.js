import './App.css';
import Button from '@mui/material/Button';
import { useState } from "react";
import MCanvas from './components/map/mCanvas';
import InfoPanel from './components/infoPanel/infoPanel';
import InputModal from './components/inputModal/inputModal';

function App() {
  const [show, setShow] = useState(true);
  const [hoverData, setHoverData] = useState({hovered: false, data: null})
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="App">
      <button variant="contained" className="inputButton" onClick={()=>{handleOpen()}}>Add new fire </button>
      <header className="App-header">
        <p>Map over wildfires in the Montesinho Park. </p>
        <p>Hover your mouse over the squares for more info.</p>
        <div className="map">
          <MCanvas setHoverData = {setHoverData} width="886px" height="549px"/>
          <InfoPanel data = {hoverData} />
        </div>
        <InputModal open = {open} handleClose={handleClose} />
      </header>
    </div>
  );
}

export default App;
