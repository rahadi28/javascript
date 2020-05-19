import React from 'react';
import SongList from "./components/SongList";
import SongDetail from "./components/SongDetail";

function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <h1>React Redux Select Song</h1>
      </nav>
      <hr/>
      <div className="row">
        <div className="col-sm">
          <SongList/>
        </div>
        <div className="col-sm">
          <SongDetail/>
        </div>
      </div>
    </div>
  );
}

export default App;
