import React from 'react'

function PostCard({title, body}) {
    return (
      <div className="main">
        <div className='post-container'>
          <h3>{title}</h3>
          <p> {body} </p>
      </div>
      </div>
  )
}

export default PostCard