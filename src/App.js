//import logo from './logo.svg';
//import './App.css';
import Header from './header'
import Contact from './contact'
import Contactlist from './contactlist'
//import { DataGrid } from '@material-ui/data-grid';



function App() {
  return (
    <div className="App">
      <Header />
      <Contact />
      <Contactlist />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
