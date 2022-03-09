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
        <img className="card-img" src={activity.img_url} alt="activity"/>
          <div className="container">
            <h4 className={mood} style={{fontSize: '20px'}}><b>{activity.activity_name}</b></h4>
            <p>{activity.description}</p>
            <button 
              onClick={() => handleCardID()}
              style={{borderColor: "#f7d6b5",
              fontFamily: 'bangers',
              fontSize: '20px',
              color: '#f27279'}}
            >
              View comments!
            </button>
            <button 
              onClick={() => favoriteClick(activity)}
              style={{borderColor: "#f7d6b5",
              fontFamily: 'bangers',
              fontSize: '20px',
              marginLeft: '10px',
              color: '#f27279'}}>
              {activity.favorite ? "Remove favorite" : "Add to favorites"}
            </button>
          </div>
      </div>
    </div>
  );
}

export default ActivityCard;
