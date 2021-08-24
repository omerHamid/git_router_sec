import React from 'react'
import {Link} from 'react-router-dom'

function HomePage() {
  return (
    <div style={{background: 'tomato'}}>
      <h1>i am home page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, velit.</p>
      <Link to='/sub'>
        <p style={{textAlign:'center'}}>change to subPage</p>
      </Link>
    </div>
  )
}

export default HomePage
