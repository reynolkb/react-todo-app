import React, { Fragment } from 'react';
import styles from "./Nav.module.css";

function Nav() {
    return (
        <Fragment className={styles.NavBar}>
            <nav className="navbar navbar-expand-lg navbar-primary text-white bg-primary navbar-inverse navbar-fixed-top">
                <div className="container-fluid desktop">
                    <div className="navbar-header">
                        <a className="navbar-brand text-white" href="/">Todo App</a>
                    </div>
                    <ul className="nav navbar-nav mr-auto">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Todo Lists</a></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="/"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                        <li><a href="/"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    )
}
export default Nav;