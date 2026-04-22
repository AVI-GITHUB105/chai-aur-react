import React,{useContext} from 'react'
import UserContext from '../Context/UseContext'

function Profile() {
    const {user} = useContext(UserContext)
//   return (
//     <div>Profile</div>
//   )
if(!user) return <div> Please LOgin</div>
// if in usesate of user [] empty string or arry is present it still count as something & return welcome
return <div> WeLcOmE {user.username}</div>

}

export default Profile