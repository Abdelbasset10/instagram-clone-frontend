import React from 'react'
import './home.css'
import Sidebar from '../../components/sidebar/Sidebar'
import PostsSide from '../../components/postsSide/PostsSide'
import RightSide from '../../components/rightSide/RightSide'
import MobileSidebar from '../../components/mobileSidebar/MobileSidebar'

const Home = () => {

  return (
    <>
    <div className='home' >
      <div className='home-1 sidebar' >
        <Sidebar />
      </div>
      <div className='home-2'>
        <PostsSide />
      </div>
      <div className='home-3' >
        <RightSide />
      </div>
    </div>
    
    <div className='mobile-sidebar'>
      <MobileSidebar />
    </div>
  </>
  )
}

export default Home