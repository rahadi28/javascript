import React from 'react';
import Screen from "./components/Screen";
import ButtonList from "./components/ButtonList";
import History from "./components/History";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2 className="mt-4"><i className="fa fa-calculator mr-2" />REACT REDUX CALCULATOR</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <Screen />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-sm-8">
            <ButtonList />
          </div>
          <div className="col-sm-4">
            <History />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
