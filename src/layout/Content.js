import React, { Component } from 'react';
import Home from '../components/Home'
import Resume from '../components/Resume'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Train from '../components/Train'
import AppFin from '../components/AppFin'
import SolarHydrogenVehicle from '../components/SolarHydrogenVehicle'
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
                <Route path={"/personal-site/projects/train"} component={Train} />
                <Route path={"/personal-site/projects/appfin"} component={AppFin} />
                <Route path={"/personal-site/projects/shvehicle"} component={SolarHydrogenVehicle} />
            </div>
        )
    }
}

export default Content