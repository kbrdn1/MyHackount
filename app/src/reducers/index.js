import { combineReducers } from "redux";
import userReducer from "./user.reducer"
import usersReducer from "./users.reducer";
import postReducer from "./post.reducer";
import errorReducer from "./error.reducer";
import allPostsReducer from "./allPosts.reducer";
import trendingReducer from "./trendingReducer"

export default combineReducers({
    userReducer, usersReducer, postReducer, errorReducer, allPostsReducer, trendingReducer
})