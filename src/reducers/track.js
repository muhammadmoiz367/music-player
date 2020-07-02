import {SET_TRACKS} from '../actions/tracks'

export default function(state=[],action){
    switch(action.type){
        case SET_TRACKS:
            return [...state, ...action.tracks]
        default:
            return state
    }
}