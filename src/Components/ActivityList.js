import React from "react";
import ActivityCard from "./ActivityCard";

function ActivityList({ mood, filteredActivities, favoriteClick }) {
  const colors = ["#f27279", "#f1b881", "#f1967f", "#f1c37e", "#f1717b"];

  return (
    <div>
      <div className="center">
        <h1
          className={mood}
          style={{ marginTop: "200px", marginRight: "10px", color: "#f1b881" }}
        >
          {mood}
        </h1>
        <img
          src="https://res.cloudinary.com/april-skrine/image/upload/v1646748604/Phase%203%20Project/boredlogo2_quh7b5.jpg"
          alt="logo small"
          style={{ width: "400px", marginTop: "200px" }}
        />
      </div>
      <div className="center-cards" style={{ marginTop: "400px" }}>
        {filteredActivities().map((activity) => (
          <ActivityCard
            favoriteClick={favoriteClick}
            key={activity.id}
            activity={activity}
            mood={mood}
          />
        ))}
      </div>
    </div>
  );
}

export default ActivityList;

/*
{sortedEntries().map(entry => 
            <span key={entry.id}> 
              <hr className='break'/> <JournalListItem key={entry.id} entry={entry} deleteEntry={deleteEntry} updateEntry={updateEntry}  />  
            </span> 
  make a fetch on activitylist page render to 9292/mood
  store that data into state
  use state to populate the cards
  can click cards to get more descriptions about activity using another fetch with activity id
*/
