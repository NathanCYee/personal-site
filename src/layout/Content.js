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
                <Route exact path={"/personal-site/"} component={Home} />
                <Route path={"/personal-site/pages/home"} component={Home} />
                <Route path={"/personal-site/pages/resume"} component={Resume} />
                <Route path={"/personal-site/pages/projects"} component={Projects} />
                <Route path={"/personal-site/pages/contact"} component={Contact} />
            </div>
        )
    }
}

export default Content