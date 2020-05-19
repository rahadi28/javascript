import React from "react";
import {connect} from "react-redux";

const SongDetail = (props) => {
    if(!props.selectedSong) {
        return <div>Select a song</div>
    }

    return (
        <div>
            {props.selectedSong.title} {props.selectedSong.duration}
        </div>
    )    
}

const mapStateToProps = (state) => {
    console.log(state);
    return {selectedSong: state.selectedSong}
}

export default connect(mapStateToProps)(SongDetail);