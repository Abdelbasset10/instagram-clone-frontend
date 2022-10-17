import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { CLOSE_PROFILE_MODEL } from '../../redux/models/actionTypes'
import FileBase from 'react-file-base64'
import {FaTimes} from 'react-icons/fa'

import './profileModel.css'

const ProfileModel = () => {
  const dispatch = useDispatch()
  const [userData,setUserData] = useState({
    userName:"",email:"",country:"",city:"",bio:"",profileImage:"",coverImage:""
  })

  const closeProfileModel = () => {
    dispatch({
      type:CLOSE_PROFILE_MODEL
    })
  }

  const handleChange = (e) => {
    setUserData({...userData,[e.target.name]:e.target.value})
  }

  const updateProfile = (e) => {
    e.preventDefault()
    console.log(userData);
  }
  return (
    <div className='bg-model'>
      <div className='profile-model-content'>
        <h3>Edit your profile</h3>
        <div className='x-mark' onClick={closeProfileModel} >
          <FaTimes />
        </div>
        <form onSubmit={updateProfile} >
            <input type="text" placeholder='UserName' className='input-line-down' name='userName' value={userData.userName} onChange={handleChange}   />
            <input type="email" placeholder='Email' className='input-line-down' name='email' value={userData.email} onChange={handleChange}  />
            <input type="text" placeholder='Country' className='input-line-down' name='country' value={userData.county} onChange={handleChange}  />
            <input type="text" placeholder='City' className='input-line-down' name='city' value={userData.city} onChange={handleChange}  />
            <input type="text" placeholder='Bio' className='input-line-down' name='bio' value={userData.bio} onChange={handleChange}  />
            <div className='flex-label' >
              <label>Profile image</label>
              <FileBase type="file" multiple={false} value={userData?.profileImage} onDone={({ base64 }) => setUserData({ ...userData, profileImage: base64 })}  />
            </div>
            <div className='flex-label'>
              <label>Cover image</label>
              <FileBase type="file" multiple={false} value={userData?.coverImage} onDone={({ base64 }) => setUserData({ ...userData, coverImage: base64 })}   />
            </div>
            <button className='btn' >Update</button>
        </form>

      </div>
    </div>
  )
}

export default ProfileModel