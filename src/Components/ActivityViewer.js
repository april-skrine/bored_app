import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

function ActivityViewer({addReview, mood}) {

  // states
  const [reviewComment,setReviewComment] = useState('')
  const [reviewName,setReviewName] = useState('')
  const [viewer, setViewer] = useState({})

  const {id} = useParams()

  
  useEffect( () => {
    fetch(`http://localhost:9292/activities/${id}`)
      .then(r => r.json())
      .then(setViewer)
  }, [id] )

  console.log(viewer)

  // create new comment object
  const onSubmit = (e) => {
    e.preventDefault()
    const newReview = {
      user_name: reviewName,
      user_comment: reviewComment,
      activity_id: id
    }
    addReview(newReview)
    e.target.reset()
  }

  return (
    <div>
      <div className="parent-comments">
        <div className="child-comments">
          <div className="card-border">
            <div className="card">
              <img className="card-img" src={viewer[0].img_url} alt="viewer"/>
              <div className="container">
              <h4 className={mood} style={{fontSize: '20px'}}><b>{viewer[0].activity_name}</b></h4>
              <p>{viewer[0].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
          <div className="comment-box">
            <form onSubmit={onSubmit}>
              <div className="field">
                <label style={{color: '#f1967f', fontSize: '20px', fontFamily: 'bangers', display:'block', marginTop: '10px'}}>Comment</label>
                <input onChange={(e) => setReviewComment(e.target.value)} style={{marginTop: '10px', height: '100px'}} type="text" name="name"/>
              </div>
              <div className="field">
                <label style={{color: '#f1967f', fontSize: '20px', fontFamily: 'bangers', display:'block', marginTop: '10px'}}>Name</label>
                <input onChange={(e) => setReviewName(e.target.value)} style={{marginTop: '10px'}} type="text" name="name" placeholder="Name"/>
              </div>
              <button type="submit" style={{marginTop: '10px'}}>Submit</button>
            </form>
          </div>
        <div className="child-comments">
          <img src="https://res.cloudinary.com/april-skrine/image/upload/v1646777315/Phase%203%20Project/commentbox_hz9ebz.jpg" alt="comments"/>
        </div>
    </div>
  )
}

export default ActivityViewer