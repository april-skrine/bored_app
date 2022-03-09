import React from "react";
import ActivityCard from "./ActivityCard";

function FavoriteList({ favoriteActivities, favoriteClick }) {
  console.log(favoriteActivities);
  const moods = {
    1: "chill",
    2: "adventurous",
    3: "hungry",
    4: "creative",
    5: "hype",
  };

  return (
    <div>
      <div className="center-cards" style={{ marginTop: "400px" }}>
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
