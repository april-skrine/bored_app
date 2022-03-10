import "./App.css";
import Home from "./Components/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ActivityList from "./Components/ActivityList";
import ActivityViewer from "./Components/ActivityViewer";
import React, { useState, useEffect } from "react";
import FavoriteList from "./Components/FavoriteList";

function App() {

  // states
  const storedMood = localStorage.getItem('mood')
  const [mood, setMood] = useState(storedMood ? storedMood : 'mood')
  const [activityData, setActivityData] = useState([])
  // const [commentData, setCommentData] = useState([])


  // local storage to persist mood on page refresh
  useEffect(() => {
    localStorage.setItem("mood", mood);
  }, [mood]);

  // fetch
  useEffect( () => {
    fetch('http://localhost:9292/activities')
    .then(r => r.json())
    .then(setActivityData)
  }, [])
    
  // favorites functions
  const favoriteClick = (oldActivity) => {
    fetch(`http://localhost:9292/activities/` + oldActivity.id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        favorite: !oldActivity.favorite,
      }),
    })
      .then((res) => res.json())
      .then((result) => setActivity(result));
  };

  const setActivity = (favoritedActivity) => {
    const newActivityData = activityData.map((activity) => {
      if (favoritedActivity.id !== activity.id) return activity;
      return favoritedActivity;
    });
    setActivityData(newActivityData);
  };

  const favoriteActivities = () => activityData.filter((a) => a.favorite)

  // filter the activity data based on the selected mood
  const filteredActivities = () => {
      if (mood === "chill") {
      return activityData.filter((a) => a.mood_id === 1);
    } else if (mood === "adventurous") {
      return activityData.filter((a) => a.mood_id === 2);
    } else if (mood === "hungry") {
      return activityData.filter((a) => a.mood_id === 3);
    } else if (mood === "creative") {
      return activityData.filter((a) => a.mood_id === 4);
    } else if (mood === "hype") {
      return activityData.filter((a) => a.mood_id === 5);
    } else {
      return activityData
    }  
   }

 
  // set state when user selects mood
  const handleSelect = e => {
    setMood(e.target.value)
    filteredActivities()
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home handleSelect={handleSelect} mood={mood} />}
        />
        <Route
          path="/favorites"
          element={
            <FavoriteList
              favoriteActivities={favoriteActivities}
              favoriteClick={favoriteClick}
              mood={mood}
            />
          }
        />
        <Route
          path="/:mood"
          element={
            <ActivityList
              favoriteClick={favoriteClick}
              mood={mood}
              filteredActivities={filteredActivities}
            />
          }
        />
        <Route
          path="/:mood/:id"
          element={
            <ActivityViewer 
                activityData={activityData} 
            />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
