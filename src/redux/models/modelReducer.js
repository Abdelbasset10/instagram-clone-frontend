import { OPEN_POST_MODEL, CLOSE_POST_MODEL, OPEN_PROFILE_MODEL, CLOSE_PROFILE_MODEL } from "./actionTypes"

const modelState = {
    postModel:false,
    profileModel:false
}
    


const modelReducer = (state=modelState,action) => {
        switch(action.type){
            case OPEN_POST_MODEL : return {...state,postModel:true}
            case CLOSE_POST_MODEL : return state.postModel= false
            case OPEN_PROFILE_MODEL: return {...state,profileModel:true}
            case CLOSE_PROFILE_MODEL : return {...state,profileModel:false}
            default : return state
        }
}

export default modelReducer