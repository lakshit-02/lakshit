
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';
import React, {useState} from 'react';
/*import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";*/

function App() {
   const[mode, setMode] = useState('light');
   const[alert, setAlert] = useState(null);

   const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1400);
   }

   const toggleMode = ()=>{
    if(mode === 'light'){
     setMode('dark');
     document.body.style.backgroundColor = 'grey';
     showAlert("dark mode has been enabled","success");
     //setInterval(() => {
      // document.title = 'TextUtils is Amazing Mode';
    // },2000);
    // setInterval(() => {
    //  document.title = 'Install TextUtils Now';
    //},1500);
    }
     else{
     setMode('light');
     document.body.style.backgroundColor = 'white';
     showAlert("light mode has been enabled","success");
     }
   }
   
  return (
    <>
  {/*<Navbar title = "TextUitls"  aboutText= "about TextUitls"/>*/}
  {/*<Router>*/}
  <Navbar title = "TextUitls" mode={mode} toggleMode={toggleMode} />
  <Alert alert={alert}/>
  <div className="container my-3">
       {/*<Routes>
          <Route exact path='/about'
           element={<About />}>
           </Route>*/}
          {/*</div><Route exact path='/'
          element=*/}     <TextForm showAlert={showAlert} heading= "Enter the text to analyze" mode={mode}/>
          {/*</div></Route>
        </Routes>*/} 
      </div>
    {/*</Router>*/}
  </>
  );
}

export default App;
