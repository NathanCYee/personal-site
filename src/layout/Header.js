import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Header extends Component {
    render() {
        return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-transparent fixed-top">
                    <Link class="navbar-brand" to={"/pages/home"}>Nathan Yee</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link class="nav-item nav-link active" to={"/pages/home"}>About Me</Link>
                            <Link class="nav-item nav-link active" to={"/pages/resume"}>Resume</Link>
                            <Link class="nav-item nav-link active" to={"/pages/projects"}>Projects</Link>
                            <Link class="nav-item nav-link active" to={"/pages/contact"}>Contact</Link>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header