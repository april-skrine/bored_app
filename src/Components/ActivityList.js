import React, {useState, useEffect} from 'react'
import ActivityCard from './ActivityCard'

function ActivityList({mood}) {

  const [activityData, setActivityData] = useState([])

  useEffect( () => {
    fetch(`http://localhost:9292/${mood}`)
    .then(r => r.json())
    .then(setActivityData)
  }, [])  

  
  return (
    <div>ActivityList
      {activityData.map(activity => <ActivityCard key={activity.id} activity={activity}/>)}
    </div>
  )
}

export default ActivityList

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