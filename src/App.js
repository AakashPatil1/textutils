import './App.css';
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light');  //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }


  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-' + cls)
    document.body.style.color = "blue"
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      // showAlert("Dark mode has been anabled", "success");
      // document.title = 'TextUtils - Dark Mode';

      // title change
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // showAlert("Light mode has been anabled", "success");
      // document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route path="/about">
              <About mode={mode} />
            </Route>
            <Route path="/">
              <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode} />
            </Route>
          </Switch>
          {/* <TextForm showAlert={showAlert} heading="Enter the Text to analyze below" mode={mode} /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
