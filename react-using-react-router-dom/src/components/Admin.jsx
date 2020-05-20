import React from 'react';
import { Link, Route } from "react-router-dom";

const PageUser = () => {
    return (
        <div>
            Page User Admin
        </div>
    )
};

const Admin = () => {
    return (
        <div>
            <Link to="/admin/user">User Admin</Link>
            <Route path="/admin/user" component={PageUser}></Route>
        </div>
    )
}
export default Admin;