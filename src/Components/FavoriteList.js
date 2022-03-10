import React from "react";
import ActivityCard from "./ActivityCard";

function FavoriteList({ favoriteActivities, favoriteClick, mood}) {

  // variables
  const colors = ["#f27279", "#f1b881", "#f1967f", "#f1c37e", "#f1717b", "#f7d6b5"]
  const randomColors = Math.floor(Math.random() * colors.length)
  const moods = {
    1: "chill",
    2: "adventurous",
    3: "hungry",
    4: "creative",
    5: "hype",
  };

  return (
    <div>
      <div className="center">
        <h1
          className={mood}
          style={{ marginTop: "200px", marginRight: "10px", color: colors[randomColors] }}
        >
          favorite
        </h1>
        <img
          src="https://res.cloudinary.com/april-skrine/image/upload/v1646748604/Phase%203%20Project/boredlogo2_quh7b5.jpg"
          alt="logo small"
          style={{ width: "400px", marginTop: "200px" }}
        />
      </div>
      <div className="parent">
          {favoriteActivities().map((activity) => (
            <ActivityCard
              favoriteClick={favoriteClick}
              key={activity.id}
              activity={activity}
              mood={moods[activity.mood_id]}
            />
          ))}
      </div>
    </div>
  );
}

export default FavoriteList;
