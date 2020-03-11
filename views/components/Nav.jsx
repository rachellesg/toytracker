import React from "react";
import { hot } from "react-hot-loader";

class Nav extends React.Component {
render() {
    let logInorSignUpButton;
    let menu;
    console.log(this.props.hashedLogin);
    if (!this.props.hashedLogin) {
        console.log("no login found");
        menu = <div className="dropdown"><a href="#" className="menu-link" data-toggle="modal" data-target="#userLoginModal">Log In</a> or <a href="#" className="menu-link" data-toggle="modal" data-target="#userRegisterModal">Register</a></div>;
    } else {
        console.log("hey yes login");
        menu = <div className="dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="material-icons">menu</i>
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="/dashboard">
              Dashboard
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="/logout">
              Log Out
            </a>
        </div>
        </div>;
    }
return (
<div className="masthead">
    <div className="container">
        <nav className="navbar navbar-expand-sm">
            <a className="navbar-brand" href="#">
                <img src="/images/logo.png" className="logo" /> Toy Tracker
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">
                            Home <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/collections">
                            Collections
                        </a>
                    </li>
                    <li className="nav-item">
                        {logInorSignUpButton}
                    </li>
                </ul>
                {menu}
            </div>
        </nav>
    </div>
</div>
);
}
}

export default hot(module)(Nav);