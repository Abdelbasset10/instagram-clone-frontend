import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {OPEN_POST_MODEL} from '../../redux/models/actionTypes'
import './mobileSidebar.css'
import cat from '../../images/Cat03.jpg'
import { items } from '../../staticData'
import { Link } from 'react-router-dom'

import {AiFillHome, AiFillHeart} from 'react-icons/ai'
import {FaSearch, FaFacebookMessenger} from 'react-icons/fa'
import {MdAddBox} from 'react-icons/md'
import AddModel from '../addModel/AddModel'

const MobileSidebar = () => {
  const dispatch = useDispatch()
  const isPostModel = useSelector((state)=>state.model)

  const openPostModel = () => {
    dispatch({
      type:OPEN_POST_MODEL
    })
}
  return (
    <div >
        <div className='mobile-sidebar-content'>
          <div className='mobile-sidebar-items'>
          <Link to='/' className='link' >
              <div className='flex-label' >
                <AiFillHome className='sidebar-icon' />
              </div>
            </Link>
            <div className='flex-label' >
              <FaSearch className='sidebar-icon'/>
            </div>
            <div className='flex-label' >
              <FaFacebookMessenger className='sidebar-icon' />
            </div>
            <div className='flex-label' >
              <AiFillHeart className='sidebar-icon' />
            </div>
            <div className='flex-label' onClick={openPostModel} >
              <MdAddBox className='sidebar-icon' />
            </div>
            {isPostModel.postModel && (
                <div>
                  <AddModel />
                </div>
      )}
            <Link to='/profile' className='link'>
              <div className='flex-label' >
                <img src={cat} alt="userPhoto" />
              </div>
            </Link>
            
          </div>
        </div>
    </div>
  )
}

export default MobileSidebar