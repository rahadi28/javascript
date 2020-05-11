import React from "react";

const UserDetail = (props) => {
    return (
        <div className="col mb-4">
            <div className="card">
                <img src={props.avatar} className="card-img-top" alt="avatar" />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href="#section" className="card-link">More...</a>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Join on {props.join}</small>
                </div>
            </div>
        </div>
    )
}

export default UserDetail;