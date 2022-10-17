import React from 'react'
import './postsSide.css'
import Post from '../post/Post'
import { posts } from '../../staticData'
import { useSelector } from 'react-redux'
import AddModel from '../addModel/AddModel'







const PostsSide = () => {
  const isPostModel = useSelector((state)=>state.model)

  return (
    <div className='posts'>
       {isPostModel.postModel && (
                <div>
                  <AddModel />
                </div>
        )}
      <div className='posts-padding'>
        <div className='posts-content'>
          {posts.map((post,index)=>{
            return(
              <div key={index} className='post' >
                <Post post={post} />
              </div>
            )
          })}

        </div>

      </div>
    </div>
  )
}

export default PostsSide