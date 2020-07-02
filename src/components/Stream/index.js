import React from 'react';
import {connect} from 'react-redux'
import Stream from './presenter'

function mapStateToProps(state){
    return{
        tracks: state.tracks
    }
}

export default connect(mapStateToProps)(Stream);