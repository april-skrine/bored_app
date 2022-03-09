import React from 'react'

function CommentCard({deleteComment, comment}) {
  return (
    <div>{comment.user_comment}
        <button onClick={() => deleteComment(comment)} >
            delete
        </button>
    </div>
  )
}

export default CommentCard