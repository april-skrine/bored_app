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
    fetch('http://localhost:9292/activities')
    .then(r => r.json())
    .then(setActivityData)
  }, [])

  const filteredActivities = () => {

    if (mood === 'chill') {
      return activityData.filter(a => a.mood_id === 1)
    } else if (mood === 'adventurous') {
      return activityData.filter(a => a.mood_id === 2)
    } else if (mood === 'hungry') {
      return activityData.filter(a => a.mood_id === 3)
    } else if (mood === 'creative') {
      return activityData.filter(a => a.mood_id === 4)
    } else if (mood === 'hype') {
      return activityData.filter(a => a.mood_id === 5)
    } else {
      return activityData
    }  
   }

  const handleSelect = e => {
    setMood(e.target.value)
    filteredActivities()
  }

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home handleSelect={handleSelect} mood={mood}/>}/>
          <Route path='/:mood' element={<ActivityList mood={mood} filteredActivities={filteredActivities} />}/>
          <Route path='/:mood/:id' element={<ActivityViewer activityData={activityData} />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
