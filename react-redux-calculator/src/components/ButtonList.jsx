import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { clearHistory, pressButton, pressEqual, pressReset } from "../actions";

class ButtonList extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="row mb-4">
                            <div className="col-sm-4">
                                <button type="button" className="btn btn-outline-primary btn-lg btn-block" onClick={() => { this.props.pressButton(7) }}>7</button>
                            </div>
                            <div className="col-sm-4">
                                <button type="button" className="btn btn-outline-primary btn-lg btn-block" onClick={() => { this.props.pressButton(8) }}>8</button>
                            </div>
                            <div className="col-sm-4">
                                <button type="button" className="btn btn-outline-primary btn-lg btn-block" onClick={() => { this.props.pressButton(9) }}>9</button>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-sm-4">
                                <button type="button" className="btn btn-outline-primary btn-lg btn-block" onClick={() => { this.props.pressButton(4) }}>4</button>
                            </div>
                            <div className="col-sm-4">
                                <button type="button" className="btn btn-outline-primary btn-lg btn-block" onClick={() => { this.props.pressButton(5) }}>5</button>
                            </div>
                            <div className="col-sm-4">
                                <button type="button" className="btn btn-outline-primary btn-lg btn-block" onClick={() => { this.props.pressButton(6) }}>6</button>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-sm-4">
                                <button type="button" className="btn btn-outline-primary btn-lg btn-block" onClick={() => { this.props.pressButton(1) }}>1</button>
                            </div>
                            <div className="col-sm-4">
                                <button type="button" className="btn btn-outline-primary btn-lg btn-block" onClick={() => { this.props.pressButton(2) }}>2</button>
                            </div>
                            <div className="col-sm-4">
                                <button type="button" className="btn btn-outline-primary btn-lg btn-block" onClick={() => { this.props.pressButton(3) }}>3</button>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-sm-4">
                                <button type="button" className="btn btn-outline-primary btn-lg btn-block" onClick={() => { this.props.pressButton(0) }}>0</button>
                            </div>
                            <div className="col-sm-4">
                                <button type="button" className="btn btn-info btn-lg btn-block" onClick={() => { this.props.pressButton(".") }}>.</button>
                            </div>
                            <div className="col-sm-4">
                                <button type="button" className="btn btn-success btn-lg btn-block" onClick={() => { this.props.pressReset() }}>C</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="row mb-4">
                            <div className="col-sm-6">
                                <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => { this.props.pressButton('+') }}>+</button>
                            </div>
                            <div className="col-sm-6">
                                <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => { this.props.pressButton('-') }}>-</button>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-sm-6">
                                <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => { this.props.pressButton('*') }}>&times;</button>
                            </div>
                            <div className="col-sm-6">
                                <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => { this.props.pressButton('/') }}>&divide;</button>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-sm-12">
                                <button type="button" className="btn btn-secondary btn-lg btn-block" onClick={() => { this.props.pressEqual() }}>=</button>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-sm-12">
                                <button type="button" className="btn btn-danger btn-lg btn-block" onClick={() => { this.props.clearHistory() }}><i className="fa fa-trash"></i></button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ clearHistory, pressButton, pressEqual, pressReset }, dispatch)
}

export default connect(null, mapDispatchToProps)(ButtonList)