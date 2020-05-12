import React from "react";

class SearchBar extends React.Component {
    state = { searchKeyword: "" }

    onFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.searchKeyword)
        this.props.onSubmit(this.state.searchKeyword)
    }

    onInputChange = (event) => {
        console.log(event.target.value);
        this.setState({ searchKeyword: event.target.value })
    }
    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control" id="searchBar" value={this.state.searchKeyword} placeholder="Search Image" onChange={this.onInputChange} />
                </div>
            </form>
        )
    }
}

export default SearchBar;