import React from 'react';
import { getUsers, addUser } from "./api/user";
import "./App.css"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null
    }
  }

  addNewUser = async () => {
    const response = await addUser();
    const result = await response.json();
    console.log(result);
    this.onGetLayananCepat();
  }

  onGetLayananCepat = async () => {
    const response = await getUsers();
    const result = await response.json();
    this.setState({ users: result.data });
  }

  componentDidMount() {
    this.onGetLayananCepat();
  }

  onRenderInfo = () => {
    const { users } = this.state;
    if (users) {
      const dataRender = users.map((user, i) => {
        return (
          <tr key={i}>
            <th scope="row">
              <span className="custom-checkbox">
                <input type="checkbox" id={user.id} name="options[]" value="1" />
                <label htmlFor={user.id}/>
              </span>
            </th>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone_number}</td>
            <td>{user.gender ? "Male" : "Female"}</td>
            <td>
              <a href="editUserModal" className="edit" data-toggle="modal"><i className="fa fa-pencil" data-toggle="tooltip" title="Edit"></i></a>
              <a href="delUserModal" className="delete" data-toggle="modal"><i className="fa fa-trash" data-toggle="tooltip" title="Delete"></i></a>
            </td>
          </tr>
        )
      })
      return dataRender;
    } else {
      return <tr></tr>
    }
  }

  render() {
    return (
      <div className="container">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-6">
                <h2>React Layanan Belakang</h2>
              </div>
              <div className="col-sm-6">
                <a onClick={this.addNewUser} className="btn btn-success" data-toggle="modal"><i className="fa fa-plus-circle"></i><span>Add New User</span></a>
                <a href="#delUserModal" className="btn btn-danger" data-toggle="modal"><i className="fa fa-minus-circle"></i><span>Delete</span></a>
              </div>
            </div>
          </div>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">
                  <span className="custom-checkbox">
                    <input type="checkbox" id="selectAll" />
                    <label htmlFor="selectAll" />
                  </span>
                </th>
                <th scope="col">ID</th>
                <th scope="col">NAME</th>
                <th scope="col">EMAIL</th>
                <th scope="col">PHONE</th>
                <th scope="col">GENDER</th>
                <th scope="col">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {this.onRenderInfo()}
            </tbody>
          </table>
          <div className="clearfix">
            <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
            <ul className="pagination">
              <li className="page-item disabled"><a href="#prev">Previous</a></li>
              <li className="page-item"><a href="#1" className="page-link">1</a></li>
              <li className="page-item"><a href="#2" className="page-link">2</a></li>
              <li className="page-item active"><a href="#3" className="page-link">3</a></li>
              <li className="page-item"><a href="#4" className="page-link">4</a></li>
              <li className="page-item"><a href="#5" className="page-link">5</a></li>
              <li className="page-item"><a href="#next" className="page-link">Next</a></li>
            </ul>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
