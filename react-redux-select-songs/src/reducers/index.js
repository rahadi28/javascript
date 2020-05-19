import {combineReducers} from "redux";

const songListReducer = () => {
    return [
        {title: "Kokoro no Tomo", duration: "03.32"},
        {title: "Blue Bird", duration: "03.38"},
        {title: "Orange", duration: "03.30"},
        {title: "Harukaze", duration: "03.36"},
        {title: "Kimi no Namae", duration: "03.35"}
    ]
}

const selectedSongReducer = (song = null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload;
    }
    return song;
}

export default combineReducers({
    songList : songListReducer,
    selectedSong : selectedSongReducer
});