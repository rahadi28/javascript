import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends React.Component {
    render() {
        return this.props.songList.map((song) => {
            return (
                <div className="row" key={song.title}>
                    <div className="col-sm alert alert-secondary">{song.title}</div>
                    <div className="col-sm">
                        <button type="button" className="btn btn-outline-secondary" onClick={() => { this.props.selectSong(song) }}>Select</button>
                    </div>
                </div>
            )
        });
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return { songList: state.songList }
}

// const mapDispatchToProps = (dispatch) => {
//     console.log(dispatch);
//     return {selectSong: (song) => dispatch({type: "SONG_SELECTED", payload: song})}
// }

// const mapDispatchToProps = (dispatch) => {
//     return {selectSong: (song) => dispatch(selectSong(song))}
// }

// const mapDispatchToProps = {
//     selectSong: selectSong
// }

export default connect(mapStateToProps, { selectSong: selectSong })(SongList);