import React from 'react'
import {Link} from 'react-router-dom'

function SubPage() {
  return (
    <div style={{background: 'sky'}}>
      <h3>i am sub page</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem eligendi a tenetur delectus repudiandae laudantium veniam placeat nesciunt illo at tempora mollitia dignissimos provident, impedit est, consequatur quam maiores quibusdam aut reprehenderit? Velit, iste voluptatibus iure ipsam doloribus facilis saepe earum inventore magnam consectetur nesciunt eligendi, maxime et, ullam corrupti.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti in deserunt tempore explicabo praesentium harum recusandae, alias ducimus unde doloribus. Voluptas obcaecati doloribus tenetur illum consectetur sit nobis nesciunt error!</p>
      <Link to='/'>
        <p style={{textAlign:'center'}}>HomePage</p>
      </Link>
    </div>
  )
}

export default SubPage
