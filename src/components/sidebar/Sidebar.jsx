import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { OPEN_POST_MODEL } from '../../redux/models/actionTypes'
import './sidebar.css'
import cat from '../../images/Cat03.jpg'

import {AiFillHome, AiFillHeart} from 'react-icons/ai'
import {FaSearch, FaFacebookMessenger} from 'react-icons/fa'
import {MdAddBox} from 'react-icons/md'
import AddModel from '../addModel/AddModel'

const Sidebar = () => {
  const dispatch = useDispatch()
  const isPostModel = useSelector((state)=>state.model)

  const openPostModel = () => {
      dispatch({
        type:OPEN_POST_MODEL
      })
  }

  return (
    <div className='sidebar'>
      <div className='sidebar-padding'>
        {/* Pc */}
        <div className='sidebar-content'>
          <h2>Instagram</h2>
          <div className='sidebar-items'>
            <Link to='/' className='link' >
              <div className='flex-label side-hover' >
                <AiFillHome className='sidebar-icon' />
                <p>Home</p>
              </div>
            </Link>
            <div className='flex-label side-hover' >
              <FaSearch className='sidebar-icon'/>
              <p>Search</p>
            </div>
            <div className='flex-label side-hover' >
              <FaFacebookMessenger className='sidebar-icon' />
              <p>Messages</p>
            </div>
            <div className='flex-label side-hover' >
              <AiFillHeart className='sidebar-icon' />
              <p>Notifications</p>
            </div>
            <div className='flex-label side-hover' onClick={openPostModel} >
              <MdAddBox className='sidebar-icon' />
              <p>New Post</p>
            </div>
              {isPostModel.postModel && (
                <div>
                  <AddModel />
                </div>
      )}
            
            <Link to='/profile' className='link'>
              <div className='flex-label side-hover' >
                <img src={cat} alt="userPhoto" />
                <p>Profile</p>
              </div>
            </Link>
          </div>
        </div>
        {/* Mobile  */}
      </div>
    </div>
  )
}

export default Sidebar