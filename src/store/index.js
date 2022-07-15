import {configureStore, combineReducers} from '@reduxjs/toolkit';
import subRedditReducer from "./subRedditSlice";

const store = configureStore({
    reducer: combineReducers({
        subreddit: subRedditReducer
    })
})

export default store;
