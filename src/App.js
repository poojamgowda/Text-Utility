import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Al from './Components/Al';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setAlert(null);
  }, 1500);
  }
  // const removeBodyClasses=()=>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-primary')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-danger')
    
  // }
  const toggleMode=()=>{
    // removeBodyClasses();
    // console.log(cls)
    // document.body.classList.add('bg-'+cls)
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      //showAlert("Dark mode enabled","success");
      // document.title='Textutil - Dark mode';
      // setInterval(() => {
      //   document.title='textutil is amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title='Install textutil'
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      //showAlert("light mode enabled","success");
      // document.title='Textutil - Light mode';
    }
  }
  return (
    <>
      {/* <Navbar title="Change" aboutText="About Us" mode={mode} toggleMode={toggleMode}/> */}
      <Router>
      <Navbar title="Change" mode={mode} toggleMode={toggleMode}/>
      
      <Al Alert={alert}/>
      <div className="container">
      <Routes>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/" element={<TextForm heading="Enter the text" mode={mode} showAlert={showAlert} />}>
          </Route>
      </Routes>
      </div>
      </Router>
      
    </>
  
  );
}

export default App;
