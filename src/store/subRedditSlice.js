import {createSlice} from '@reduxjs/toolkit';
import { getSubreddits } from '../api/reddit';

const initialState = {
    subreddits: [],
    pending: false,
    error: false
};


const subRedditSlice = createSlice({
    name: 'subreddits',
    initialState,
    reducers: {
        getSubredditPending(state) {
            state.pending= true
        },
        getSubredditsSuccess(state, action) {
            state.subreddits = action.payload;
            state.pending = false
        },
        getSubredditFailed(state) {
            state.pending = false,
            state.error = true

        }
    }
});

export const {getSubredditFailed, getSubredditPending, getSubredditsSuccess} = subRedditSlice.actions;

export default subRedditSlice.reducer;

export const fetchSubreddits = () => async (dispatch) => {
    try {
        dispatch(getSubredditPending());
        const subreddits = await getSubreddits;
        dispatch(getSubredditsSuccess(subreddits))
    } catch (err) {
        dispatch(getSubredditFailed());
    }

}

export const selectSubreddits = (state) => state.subreddits.subreddits;
