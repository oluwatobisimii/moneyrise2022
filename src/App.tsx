import React, {useState} from 'react';
import './App.css';
import Home from './views/Home';

function App() {
  const [bodyScroll, setBodyScroll] = useState(false);
  
  const bodyClasss = bodyScroll ? "App overflow-y-hidden h-full" : "App"
  
  const changeBodyScroll = ()=>{
    bodyScroll ? setBodyScroll(false) : setBodyScroll(true);
    console.log('clicked body')
  }

  return (
    
    <div className={bodyClasss}>
      <Home bodyscrollprop = {changeBodyScroll}/>
    </div>
  );
}

export default App;
