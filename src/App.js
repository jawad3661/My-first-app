import './App.css';
import React, { useState } from 'react'
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode,setmode] = useState('light');
  const [Enablemode,setEnablemode] = useState('Disabled Dark Mode');
  const [alert, setalert] = useState(null);

  const Showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }
  
  const Toggle=()=>{
    if(mode==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor='#273d50';
      setEnablemode("Enable Dark Mode");
      Showalert("Dark Mode has been Enabled","Success")
    }
    else
    {
      setmode('light');
      document.body.style.backgroundColor='white';
      setEnablemode("Disable Dark Mode");
      Showalert("Light Mode has been Enabled","Success");
    }
  }
  return (
    <>
    <Router>
    <Navbar Title="Navbar" about="About" mode={mode} Toggle={Toggle} Enablemode={Enablemode}/>
    <div className="container my-3">
    <Alert alert={alert}/>
    
    <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <TextForm showalert={()=>Showalert()} heading="Enter to Analayse Below" mode={mode}/>
          </Route>
        </Switch>
        </div>
    </Router>
    
    </>

  );
}

export default App;
