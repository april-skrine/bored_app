import React from 'react'

function CommentCard({deleteComment, comment}) {
  return (

    <div>
      <p 
        style={{color: '#f1967f', 
        fontSize: '20px', 
        fontFamily: 'bangers', 
        display:'block'}}
      >
        <u>{comment.user_name}</u> says:
      </p>
      <p className="excerpt" style={{fontFamily: 'Roboto Condensed'}}>
        <pre>
          {comment.user_comment}
        </pre>
        <button onClick={() => deleteComment(comment)} >
            🗑️
        </button>
      </p>
    </div>
  )
}

export default CommentCard