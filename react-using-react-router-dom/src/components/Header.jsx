import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h1>My App (this header is visible all the time)</h1>
            <Link to="/">Home</Link>
            <Link to="/admin">Admin</Link>
        </div>
    )
}
export default Header;