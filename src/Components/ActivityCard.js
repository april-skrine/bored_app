import React from 'react'

function ActivityCard({activity, mood}) {
  return (
    <div className="card-border">
      <div className="card">
        <img className="card-img" src={activity.img_url} alt="activity"/>
          <div className="container">
            <h4 className={mood} style={{fontSize: '20px'}}><b>{activity.activity_name}</b></h4>
            <p>{activity.description}</p>
          </div>
      </div>
    </div>
  )
}

export default ActivityCard