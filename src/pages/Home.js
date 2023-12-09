import React, { useEffect, useState } from 'react'
import './Home.css'; 
function Home() {
const [ users , setUsers] = useState([]);


useEffect(() => {
fetch("https://dummyjson.com/users/")
.then(response => response.json())
.then( data => setUsers(data.users))


}, []  );













  return (
   <div>
   
   {users.map((user) => {
return (
<div className='main'>
<div className='content'>
<img src={user.image} alt='users-imge' />
</div>

<h3>{user.firstName}  {user.lastName}</h3>
<p>{user.email}</p>




</div>

   

)



})}

   
   </div>
  )
}

export default Home