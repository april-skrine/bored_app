import './App.css';
import Home from './Components/Home';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import ActivityList from './Components/ActivityList';
import ActivityViewer from './Components/ActivityViewer';
import React, {useState, useEffect} from 'react';

function App() {
  const storedMood = localStorage.getItem('mood')
  const [mood, setMood] = useState(storedMood ? storedMood : 'mood')
  const [activityData, setActivityData] = useState([])

  useEffect(() => {
    localStorage.setItem('mood', (mood));
  }, [mood]);

  useEffect( () => {
    fetch(`http://localhost:9292/activities`)
    .then(r => r.json())
    .then(setActivityData)
  }, [])



  const handleSelect = e => {
    setMood(e.target.value)
  }

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home handleSelect={handleSelect} mood={mood}/>}/>
          <Route path='/:mood' element={<ActivityList mood={mood} activityData={activityData} />}/>
          <Route path='/:mood/:id' element={<ActivityViewer/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
