import {GET_MOVIES} from '../actions/index.js';

const initialState = {
    movies: []
};

export default function movieReducer(state = initialState, action){
        switch(action.type){
        case GET_MOVIES:
            return{                
                movies: action.payload.Search
            }
            default: return {...state}
    }
};


