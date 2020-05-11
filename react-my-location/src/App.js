import React from 'react';
import SeasonDisplay from "./components/SeasonDisplay";
import Spinner from "./components/Spinner";
import "./App.css"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lg: null,
      lt: null,
      msg: ""
    }

    /* window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lg: position.coords.longitude, lt: position.coords.latitude
        })
      },
      (err) => this.setState({ msg: err.message })
    ) */
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lg: position.coords.longitude, lt: position.coords.latitude
        })
      },
      (err) => this.setState({ msg: err.message })
    )
  }

  renderContent() {
    if (this.state.msg) {
      return <div>Message : {this.state.msg}</div>
    }

    if (!this.state.msg && this.state.lg) {
      return (
        <div>
          <div className="text-title">Posisi anda</div>
          <div className="text-info">Longitude : {this.state.lg}</div>
          <div className="text-info space-bottom">Latitude : {this.state.lt}</div>
          <SeasonDisplay />
        </div>
      )
    }

    return <div><Spinner /></div>
  }


  render() {
    /* if (this.state.msg) {
      return <div>Message : {this.state.msg}</div>
    }
    
    if(!this.state.msg && this.state.lg) {
      return (
        <div>
          <h3>Posisi anda</h3>
          <div className="text-info">Longitude : {this.state.lg}</div>
          <div className="text-info space-bottom">Latitude : {this.state.lt}</div>
          <SeasonDisplay/>
        </div>
      )
    }
  
    return <div><Spinner/></div> */

    return (
      <div className="container">
        {this.renderContent()}
      </div>
    )
  }
}

export default App;
