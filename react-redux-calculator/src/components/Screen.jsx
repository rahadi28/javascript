import React from "react";
import { connect } from "react-redux";

class Screen extends React.Component {
    render() {
        return (
            <input type="text" style={{ height: 100, fontSize: 94 }} className="form-control text-right" value={(this.props.screen) ? this.props.screen : '0'} disabled />
        )
    }
}

function mapStateToProps(state) {
    return {
        screen: state.calculator.screen
    }
}

export default connect(mapStateToProps)(Screen)