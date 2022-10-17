import {combineReducers} from 'redux'
import postsReducer from './posts/postsReducer'
import userReducer from './user/userReducer'
import modelReducer from './models/modelReducer'

const rootReducers = combineReducers({
    posts:postsReducer,
    user:userReducer,
    model:modelReducer
})

export default rootReducers