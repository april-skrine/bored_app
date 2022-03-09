import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

function ActivityViewer() {

    const [singleActivity, setSingleActivity] = useState('')
    const { id } = useParams()

useEffect( () => {
    fetch(`http://localhost:9292/activities/${id}`)
       .then(r => r.json())
      .then(setSingleActivity)
    }, [id] ) 
    
  return (
    <div>
      <div>
        <div style={{float: 'left', width: '50%', borderColor: 'black'}}>
          Content of the activity here
        </div>
        <div className="comments" style={{float: 'right', width: '50%', borderColor: 'black'}}>
          <img src="https://res.cloudinary.com/april-skrine/image/upload/v1646777315/Phase%203%20Project/commentbox_hz9ebz.jpg" alt="comments"/>
          <div className="form-div">
            <form>
              <div className="field">
                <label style={{color: '#C1BBDA', fontSize: '20px', fontFamily: 'shizuru'}}>COMMENT</label>
                <input type="text" name="name" placeholder="Name"/>
              </div>
              <div className="field">
                <label style={{color: '#C1BBDA', fontSize: '20px', fontFamily: 'shizuru'}}>NAME</label>
                <input type="text" name="name" placeholder="Name"/>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ActivityViewer