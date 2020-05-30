import React, { Component } from "react";
import { connect } from "react-redux";

class MainScreen extends Component {
    render() {
        return <div>Hello..., {this.props.userActive.fullName}</div>;
    }
}

export default connect(state => { return { userActive: state.userActive }; })(MainScreen);