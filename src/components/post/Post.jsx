import React , {useState} from 'react'
import {useDispatch} from 'react-redux'
import {AiOutlineEllipsis} from 'react-icons/ai'
import {FaHeart} from 'react-icons/fa'
import {BsFillChatFill} from 'react-icons/bs'
import './post.css'
import { OPEN_POST_MODEL } from '../../redux/models/actionTypes'

const Post = ({post}) => {
    const dispatch = useDispatch()
    const [isEditPost,setIsEditPost] = useState(false)


    const openPostModel = () => {
        dispatch({
            type:OPEN_POST_MODEL
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <>
        <div className='post-up'>
            <div className='post-up-user' >
                <img src={post.userImg} alt="userImage"/>
                <p>{post.userName}</p>
            </div>
            <div onClick={()=>setIsEditPost(!isEditPost)} style={{position:'relative'}} >
                <AiOutlineEllipsis className='post-icon' />
                {isEditPost && (
                    <div className='edit-post-div'>
                        <p onClick={openPostModel} >Edit Post</p>
                        <p>Delete Post</p>
                    </div>
                ) }
            </div>
        </div>
        <div className='postImage' >
            <img src={post.postImage} alt="postImage" />
        </div>
        <div className='post-down'>
            <div className='post-down-icons'>
                <FaHeart className='post-down-icon' />
                <BsFillChatFill className='post-down-icon' />
            </div>
            <div className='post-down-info' >
                <p>Liked by 10 people</p>
                <div style={{display:'flex',alignItems:'center',gap:'0.5rem'}}>
                    <p style={{fontWeight:'bold'}} > {post.userName}</p>
                    <p>{post.status}</p>
                </div>
                <p>{post.createdAt}</p>
            </div>
        </div>
        <div className='comment' >
            <form onSubmit={handleSubmit} >
                <input type="text" placeholder='add new comment'/>
                <button>Share</button>
            </form>
        </div>
    </>
        )
}

export default Post