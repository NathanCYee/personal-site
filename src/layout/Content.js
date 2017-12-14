import React, { Component } from 'react';
import Home from '../components/Home'
import Resume from '../components/Resume'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import {Route} from 'react-router-dom';

class Content extends Component {
    render() {
        return(
            <div>
                <Route exact path={"/"} component={Home} />
                <Route path={"/pages/home"} component={Home} />
                <Route path={"/pages/resume"} component={Resume} />
                <Route path={"/pages/projects"} component={Projects} />
                <Route path={"/pages/contact"} component={Contact} />
            </div>
        )
    }
}

export default Content