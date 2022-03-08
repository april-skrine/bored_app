import './App.css';
import Home from './Components/Home';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import ActivityList from './Components/ActivityList';
import React, {useState} from 'react';

function App() {

  const [mood, setMood] = useState('mood')


  const handleSelect = e => {
    setMood(e.target.value)
  }

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home handleSelect={handleSelect} mood={mood}/>}/>
          <Route path='/:mood' element={<ActivityList mood={mood}/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
