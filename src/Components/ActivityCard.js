import React from "react";
import { useNavigate } from "react-router-dom";

function ActivityCard({ activity, mood, favoriteClick }) {
  const navigate = useNavigate();

  const handleCardID = () => {
    navigate(`/${mood}/${activity.id}`);
  };

  return (
    <div className="card-border">
      <div className="card">
        <img
          className="card-img"
          onClick={() => handleCardID()}
          src={activity.img_url}
          alt="activity"
        />
        <div className="container">
          <h4 className={mood} style={{ fontSize: "20px" }}>
            <b>{activity.activity_name}</b>
          </h4>
          <button onClick={() => favoriteClick(activity)}>
            {activity.favorite ? "Remove from favorites" : "Add to favorites"}
          </button>
          <p>{activity.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ActivityCard;
