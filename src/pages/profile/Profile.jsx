import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { OPEN_PROFILE_MODEL } from '../../redux/models/actionTypes'
import Sidebar from '../../components/sidebar/Sidebar'
import MobileSidebar from '../../components/mobileSidebar/MobileSidebar'
import ProfileModel from '../../components/profileModel/ProfileModel'
import cat from '../../images/Cat03.jpg'
import {FiSettings} from 'react-icons/fi'


import {userActivities} from '../../staticData'
import { posts } from '../../staticData'
import Post from '../../components/post/Post'
import './profile.css'

const Profile = () => {
    const dispatch = useDispatch()
    const isProfileModel = useSelector((state)=>state.model)
    const openProfileModel = () => {
        dispatch({
            type:OPEN_PROFILE_MODEL
        })
    }
  return (
    <>
    <div className='profile'>
        <div className='sidebar'>
            <Sidebar />
        </div>
        <div className='profile-right'>
            <div className='profile-content'>
                <div className='profile-content-user' >
                    <div className='profile-img-user'>
                        <img src={cat} alt="userImage" />
                    </div>
                    <div className='profile-content-user-infos'>
                        <div className='profile-content-user-infos-up'>
                            <p>Profes__sorito</p>
                            <button onClick={openProfileModel} >Edit profile</button>
                            <FiSettings className='setting-icon' onClick={openProfileModel} />
                        </div>
                        {isProfileModel.profileModel && (
                            <div>
                                <ProfileModel />
                            </div>
                        )}
                        <div className='profile-content-user-infos-center'>
                            {userActivities.map((activity,index)=>{
                                return(
                                    <div style={{display:'flex',alignItems:'center',gap:'0.25rem'}} key={index} >
                                        <p style={{fontWeight:'bold'}} >{activity.number}</p>
                                        <p>{activity.text}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='profile-content-user-infos-down'>
                            <p style={{fontWeight:'bold',marginBottom:'0.5rem'}} >ProfeS__Sor Basset</p>
                            <p>Let's Go !!</p>
                        </div>
                    </div>
                </div>
                <div  className='profile-content-userPubs'>
                    {posts.map((post,index)=>{
                        return(
                            <div className='post' key={index}>
                                <Post post={post} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>     
    </div>
     <div className='mobile-sidebar'>
     <MobileSidebar />
   </div>
   </>
  )
}

export default Profile