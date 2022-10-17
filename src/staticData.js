import cat from './images/Cat03.jpg'
import {AiFillHome, AiFillHeart} from 'react-icons/ai'
import {FaSearch, FaFacebookMessenger} from 'react-icons/fa'
import {MdAddBox} from 'react-icons/md'


export const  posts = [
  {
    userImg:cat,
    userName:'abdelbasset',
    postImage:cat,
    status:'first image bro',
    createdAt:'5 minutes ago'
  },
  {
    userImg:cat,
    userName:'mohamed',
    postImage:cat,
    status:'second image bro',
    createdAt:'5 minutes ago'
  },
  {
    userImg:cat,
    userName:'rezazi',
    postImage:cat,
    status:'third image bro',
    createdAt:'5 minutes ago'
  },
]

export const items = [ 
  {
    img:AiFillHome,
    text:'Home'
  },
  {
    img:FaSearch,
    text:'Search'
  },
  {
    img:FaFacebookMessenger,
    text:'Messages'
  },
  {
    img:AiFillHeart,
    text:'Notifications'
  },
  {
    img:MdAddBox,
    text:'New Post'
  }
]

export const userActivities = [ 
  {
    number:10,
    text:'post'
  },
  {
    number:100,
    text:'followers'
  },
  {
    number:200,
    text:'followings'
  }
]