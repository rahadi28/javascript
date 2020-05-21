import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectHistory } from "../actions";

class History extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row mb-4">
                    <div className="col-lg-12">
                        <h3><i className='fa fa-clock-o mr-2' />History Operator</h3>
                    </div>
                </div>
                <ul className='list-group'>
                    {this.props.history.map((history, index) => (
                        <li key={index} className='list-group-item list-group-item-action' onClick={() => {
                            this.props.selectHistory(index)
                        }}>
                            {`${history} = ${eval(history)}`}
                        </li>
                    ))}
                </ul>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        history: state.calculator.history
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectHistory }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(History)