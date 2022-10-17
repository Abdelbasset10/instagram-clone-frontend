import React from 'react'
import './rightSide.css'

import cat from '../../images/Cat03.jpg'

const users = [
  {
    img:cat,
    info:'new in instagram'
  },
  {
    img:cat,
    info:'new in instagram'
  },
  {
    img:cat,
    info:'new in instagram'
  }
]


const RightSide = () => {
  return (
    <div className='right-side'>
      <div className='right-side-padding'>
        <div className='right-side-content'>
          <div className='right-side-content-head'>
            <div className='flex-label' >
              <img src={cat} alt="userImage" />
              <p>Professor Basset</p>
            </div>
            <p>LogOut</p>
          </div>
          <div className='followings-div'>
            <p>suggestions for you</p>
            {users.map((user,index)=>{
              return (
                <div className='followings-div-content' key={index} >
                  <div className='flex-label' >
                    <img src={user.img} alt="follingUserImg" />
                    <p>{user.info}</p>
                  </div>
                  <p>Follow</p>
                </div>
              )
            })}


          </div>
          <div className='footer'>
            <p>Instagram clone</p>
            <p>by Abdelbasset Rezazi</p> 
          </div>
        </div>

      </div>

    </div>
  )
}

export default RightSide