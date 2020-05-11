import React from "react";

class UserCard extends React.Component {

    render() {
        return (
            <div className="row row-cols-1 row-cols-md-3">
                {this.props.children}
            </div>
        )
    }
}

export default UserCard;