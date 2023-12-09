import React from 'react'
import { useParams } from 'react-router-dom';

function Profile() {
    let { username } = useParams();

  return (
    <div>
        <h1>profiles</h1>
        <p>username: {username}</p>
    </div>
  )
}

export default Profile