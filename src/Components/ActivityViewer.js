import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import CommentCard from './CommentCard'

function ActivityViewer({addReview}) {

  // states
  const [reviewComment,setReviewComment] = useState('')
  const [reviewName,setReviewName] = useState('')
  const [viewer, setViewer] = useState({})
  const [allComments, setAllComments] = useState([])

  const {id} = useParams()

  
  useEffect( () => {
    fetch(`http://localhost:9292/activities/${id}`)
      .then(r => r.json())
      .then(setViewer)
  }, [id] )

   useEffect( () => {
    fetch(`http://localhost:9292/comments/activities/${id}`)
    .then(r => r.json())
    .then(setAllComments)
  }, [id])

  const deleteComment = comment => {
    const newListOfComments = allComments.filter(commentObj => commentObj.id !== comment.id)
    setAllComments(newListOfComments)
    
    fetch(`http://localhost:9292/comments/${comment.id}`, {
      method: 'DELETE'
    })
  }
 
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
      {/* start logo section */}
      <div className="center">
        <img
          src="https://res.cloudinary.com/april-skrine/image/upload/v1646748604/Phase%203%20Project/boredlogo2_quh7b5.jpg"
          alt="logo-small"
          style={{ width: "400px", marginTop: "200px" }}
        />
      </div>
      {/* end logo section */}
      <div className="parent">
        {/* starts activity card */}
        <div className="card-border">
          <div className="card">
            <img className="card-img" src={viewer.img_url} alt="viewer"/>
              <div className="container">
                <h4 style={{fontSize: '30px', fontFamily: 'bangers'}}>{viewer.activity_name}</h4>
                {viewer.description}
                <hr style={{color: '#f7d6b5', marginTop: '20px', marginBottom: '20px'}}></hr>
                <form onSubmit={onSubmit}>
                  <div className="field">
                    <label style={{color: '#f1967f', fontSize: '20px', fontFamily: 'bangers', display:'block', marginTop: '10px'}}>Add a comment</label>
                    <textarea  onChange={(e) => setReviewComment(e.target.value)} name="Text1" cols="35" rows="5"/>  
                  </div>
                  <div className="field">
                    <label style={{color: '#f1967f', fontSize: '20px', fontFamily: 'bangers', display:'block', marginTop: '10px'}}>Name</label>
                    <input onChange={(e) => setReviewName(e.target.value)} style={{marginTop: '10px'}} type="text" name="name" placeholder="Name"/>
                  </div>
                  <button 
                    type="submit"
                    style={{borderColor: "#f7d6b5",
                    fontFamily: 'bangers',
                    fontSize: '20px',
                    color: '#f27279',
                    marginTop: '10px'}}
                  >
                    Submit
                  </button>
                </form>
              </div>
          </div>
        </div>
        {/* ends activity card, start comments card */}
        <div className="scroll">
          <div className="inner-scroll">
            <p>
            {allComments.map(comment => <CommentCard key={comment.id} comment={comment} deleteComment={deleteComment}/>)}
            </p>
          </div>
        </div>
        {/* ends comments card */}
      </div>
    </div>
  )
}

export default ActivityViewer