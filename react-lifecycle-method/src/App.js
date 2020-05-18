import React from 'react';
import LifecycleComp from "./components/LifecycleComp";
import './App.css';

class App extends React.Component {
  state = {
    showComponent: true
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({showComponent: false})
    // }, 15000)
  }
  render() {
    return (
      <div className="App">
        <p>Lifecycle Component</p>
        <hr />
        {this.state.showComponent ? <LifecycleComp /> : null}
      </div>
    );
  }
}

export default App;
