import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import {useState,useEffect} from 'react'


// Pages imports
import HomePage from './pages/HomePage'

// Components imports
import NavBar from './components/NavBar'


const compareAssets = (a, b) => a.key.localeCompare(b.key)

function App() {
  const [assets, setAssets] = useState([])
  const fetchData =  async () => {
    const data = await fetch("https://better-reacts.netlify.app/.netlify/functions/getAssets", {method: 'GET'}).then(p => p.json()).then(a => a.sort(compareAssets)).then(r => setAssets(r))
    //const data = await fetch("http://localhost:57514/.netlify/functions/getAssets", {method: 'GET'}).then(p => p.json()).then(r => setAssets(r))
}



useEffect(() => {
  fetchData();
  return () => {
  }
}, [])
  return (
    <Router>
    <div>
      <NavBar/>
      <Route path="/home">
      <HomePage assets={assets} setAssets={setAssets}/>
      </Route>
      <Route path="/submit">
        <h1>SUBMIT</h1>
      </Route>
      <Route path="/" exact>
        <Redirect to="/home"></Redirect>
      </Route>
    </div>
    </Router>
  );
}

export default App;
