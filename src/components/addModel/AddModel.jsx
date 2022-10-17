import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { CLOSE_POST_MODEL } from '../../redux/models/actionTypes';
import FileBase from 'react-file-base64';
import {FaTimes} from 'react-icons/fa'

import './addModel.css'

const AddModel = () => {
  const dispatch = useDispatch()
  const [postInfo,setPostInfo] = useState({
    title:"",postImage:""
  })

  const closeAddModel = () => {
    dispatch({
      type:CLOSE_POST_MODEL
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(postInfo)
  }
  
  return (
    <div className='bg-model'>
      <div className='addModel-content' >
        <div className='x-mark' onClick={closeAddModel} >
          <FaTimes />
        </div>
        <h3>Let 's Add new Post Mohamed !!</h3>
        <form onSubmit={handleSubmit} >
            <input type="text" className='input-line-down' placeholder='What is in your mind ?' value={postInfo.title} onChange={(e)=>setPostInfo({...postInfo,title:e.target.value})} />
            <FileBase type="file" multiple={false} value={postInfo?.postImage} onDone={({ base64 }) => setPostInfo({ ...postInfo, postImage: base64 })}     />
            <button className='btn'>Share</button>
        </form>
      </div>

    </div>
  )
}

export default AddModel