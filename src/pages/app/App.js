import logo from '../../images/logo/logo.svg';
import './App.css';
import GetUsersTest from "./components/GetUsersTest"
import Login from "../../components/login/Login"
import Button from "react-bootstrap/Button"
import InfoTable from '../../components/frontpage/infoTable';
import { useState } from "react";

function App() {
  console.log(process.env.DB_URL)
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>APOLLLLOLOOO?</code> and save to reload.
        </p>
        <InfoTable />
        <GetUsersTest />
        <Login props={{show: show, setShow: setShow, mordi: "MORDI"}}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
