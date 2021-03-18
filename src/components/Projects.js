import React, {Component} from 'react';
import Typist from 'react-typist';
import ParallaxCard from 'react-parallax-card'
import {Link} from 'react-router-dom'

class Projects extends Component {
    render() {
        return (
            <div>
                <div class="gradient2 jumbotron jumbotron-fluid">
                    <div class="container ">
                        <Typist
                            className="Typist"
                            cursor={{show: false}}
                        >
                            <span className="my-custom-class"><h1 class="display-3">Projects</h1></span>

                        </Typist>
                    </div>
                </div>
                <div class="row">
                    <div className="col-4">
                        <Link class="nav-item nav-link" to={"/personal-site/projects/shvehicle"}>
                            <ParallaxCard
                                label='Solar Hydrogen Vehicle'
                                enableRotate
                                enableTransform
                                style={{margin: '0 auto', width: 400, height: 300}}>

                                <img src={require('../IMG_3668.JPG')}
                                     style={{maxWidth: "100%", maxHeight: "100%"}}/>

                                <div/>
                                <div/>


                                <p style={{fontSize: '3rem', fontWeight: 'bold', padding: '3rem'}}>
                                    Vehicle
                                </p>

                            </ParallaxCard>
                        </Link>
                    </div>
                    <div className="col-4">
                        <Link class="nav-item nav-link" to={"/personal-site/projects/appfin"}>
                            <ParallaxCard
                                label='Entrepreneurship Project'
                                enableRotate
                                enableTransform
                                style={{margin: '0 auto', width: 400, height: 300}}>

                                <img src={require('../blue-yellow.svg')} style={{maxWidth: '120%', maxHeight: '120%'}}/>

                                <div/>
                                <div/>
                                <div/>

                                <img src={require('../appfin.svg')}
                                     style={{top: '-20%', left: '20%', maxWidth: '130%', maxHeight: '130%'}}/>

                                <p style={{fontSize: '3rem', fontWeight: 'bold', padding: '3rem'}}>
                                    AppFin
                                </p>

                            </ParallaxCard>
                        </Link>
                    </div>
                    <div className="col-4">
                        <Link class="nav-item nav-link" to={"/personal-site/projects/train"}>
                            <ParallaxCard
                                label='Virtual Toy Train'
                                enableRotate
                                enableTransform
                                style={{margin: '0 auto', width: 400, height: 300}}>

                                <img src={require('../purple-paper.jpg')}
                                     style={{maxWidth: '100%', maxHeight: '100%'}}/>

                                <div/>
                                <div/>
                                <div/>

                                <img src={require('../7.png')}
                                     style={{top: '20%', left: '30%', maxWidth: '90%', maxHeight: '90%'}}/>

                                <p style={{fontSize: '3rem', fontWeight: 'bold', padding: '3rem'}}>
                                    Virtual Train
                                </p>

                            </ParallaxCard>
                        </Link>
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col-4">
                        <Link class="nav-item nav-link" to={"/personal-site/projects/winch"}>
                            <ParallaxCard
                                label='Winch'
                                enableRotate
                                enableTransform
                                style={{margin: '0 auto', width: 400, height: 300}}>

                                <img src={require('../IMG_2568.JPG')}
                                     style={{maxWidth: "100%", maxHeight: "100%"}}/>

                                <div/>
                                <div/>


                                <p style={{fontSize: '3rem', fontWeight: 'bold', padding: '3rem'}}>
                                    Winch
                                </p>

                            </ParallaxCard>
                        </Link>
                    </div>
                    <div className="col-4">
                        <Link class="nav-item nav-link" to={"/personal-site/projects/BBB"}>
                            <ParallaxCard
                                label='Bikes, Boards, & Beyond'
                                enableRotate
                                enableTransform
                                style={{margin: '0 auto', width: 400, height: 300}}>

                                <img src={require('../BBB.jpg')}
                                     style={{maxWidth: '100%', maxHeight: '100%'}}/>

                                <div/>
                                <div/>
                                <div/>
                                <img src={require('../WS.png')}
                                     style={{top: '20%', left: '30%', maxWidth: '80%', maxHeight: '80%'}}/>
                                <p style={{fontSize: '2rem', fontWeight: 'bold', padding: '3rem'}}>
                                    Penetration Testing
                                </p>

                            </ParallaxCard>
                        </Link>
                    </div>

                    <div className="col-4">
                        <Link class="nav-item nav-link" to={"/personal-site/projects/Net"}>
                            <ParallaxCard
                                label='Water Treatment Plant'
                                enableRotate
                                enableTransform
                                style={{margin: '0 auto', width: 400, height: 300}}>

                                <img src={require('../IMG_2568.JPG')}
                                     style={{maxWidth: "100%", maxHeight: "100%"}}/>

                                <div/>
                                <div/>


                                <p style={{fontSize: '1.5rem', fontWeight: 'bold', padding: '3rem'}}>
                                    Unknown Network Traffic
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