import React from 'react'

function ActivityCard({activity}) {
  return (
    <div>ActivityCard
        img: {activity.img_url}
        desc: {activity.description}
    </div>
  )
}

export default ActivityCard