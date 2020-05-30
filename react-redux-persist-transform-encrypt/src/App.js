import React from "react";
import { connect } from "react-redux";
import { setUserActive } from "./actions";
import MainScreen from "./components/MainScreen";

class App extends React.Component {
  state = { pin: "", showMainScreen: false };

  componentDidMount() {
    if (this.props.userActive) {
      this.setState({ showMainScreen: true });
    }
  }

  onPinChange = ev => {
    this.setState({ pin: ev.target.value });
  };

  onButtonClick = () => {
    if (this.state.pin === "123") {
      this.setState({ showMainScreen: true });
      this.props.setUserActive({ fullName: "Rahadi Oemar" });
    }
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.pin}
          onChange={this.onPinChange}
          placeholder="PIN"
        />
        <button onClick={this.onButtonClick}>Login</button>
        {this.state.showMainScreen && <MainScreen />}
      </div>
    );
  }
}

export default connect(null, { setUserActive: setUserActive })(App);