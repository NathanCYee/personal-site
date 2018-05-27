import React, { Component } from 'react';
import Typist from 'react-typist';
import ParallaxCard from 'react-parallax-card'
import {Link} from 'react-router-dom'

class Projects extends Component {
    render() {
        return(
            <div>
                <div class="gradient2 jumbotron jumbotron-fluid">
                    <div class="container ">
                        <Typist
                            className="Typist"
                            cursor={{ show: false }}
                        >
                            <span className="my-custom-class"><h1 class="display-3">Projects</h1></span>

                        </Typist>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                <Link class="nav-item nav-link" to={"/personal-site/projects/train"}>
                <ParallaxCard
                    label='Virtual Toy Train'
                    enableRotate
                    enableTransform
                    style={{ margin: '0 auto', width: 400, height: 275 }}>

                    <img src={require('../purple-paper.jpg')} style={{ maxWidth: '100%', maxHeight: '100%' }} />

                    <div /><div /><div />

                    <img src={require('../7.png')} style={{ top: '20%', left: '30%', maxWidth: '90%', maxHeight: '90%'}} />

                    <p style={{ fontSize: '3rem', fontWeight: 'bold', padding: '3rem' }}>
                        Virtual Train
                    </p>

                </ParallaxCard>
                </Link>
                    </div>
                    <div class="col-6">
                <Link class="nav-item nav-link" to={"/personal-site/projects/appfin"}>
                    <ParallaxCard
                        label='Entrepreneurship Project'
                        enableRotate
                        enableTransform
                        style={{ margin: '0 auto', width: 400, height: 275 }}>

                        <img src={require('../blue-yellow.svg')} style={{ maxWidth: '120%', maxHeight: '120%' }} />

                        <div /><div /><div />

                        <img src={require('../appfin.svg')} style={{ top: '-20%', left: '20%', maxWidth: '130%', maxHeight: '130%'}} />

                        <p style={{ fontSize: '3rem', fontWeight: 'bold', padding: '3rem' }}>
                            AppFin
                        </p>

                    </ParallaxCard>
                </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects