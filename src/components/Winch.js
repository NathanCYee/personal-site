import React, {Component} from 'react';
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop'
import {Badge} from 'reactstrap';
import {Tooltip} from 'reactstrap';
import '../index.css';
import '../animate.css';
import {ArrowDown} from 'react-feather';

class Winch extends Component {
    render() {
        return (
            <div class="parallax">
                <div class="fillheight parallax__layer parallax__layer--back jumbotron jumbotron-fluid">
                    <center>
                        <div class="container animated fadeIn">
                            <h1 class="display-3" style={{fontWeight: 'bold'}}>Winch</h1>
                            <div><h5><Badge color="secondary" id="class">Principles of Engineering</Badge> <Badge
                                color="secondary">2 Weeks(October 2018)</Badge></h5></div>
                        </div>
                        <br/>
                        <div class="animated infinite bounce"><ArrowDown size={64}></ArrowDown></div>
                    </center>
                </div>
                <div class="parallax__layer parallax__layer--base">
                    <div class="fillheight"></div>
                    <div class=" bg-white">
                        <div class="gradient3 jumbotron jumbotron-fluid">
                            <div class="container ">
                                <span className="my-custom-class"><h1 class="display-3">Details</h1></span>
                            </div>
                        </div>
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <p>The goal of this project was to make a winch using vex parts and a DC
                                        motor. The project taught us about gear ratios and how they affect the speed of
                                        the winch as well as how much weight it could pull.
                                    </p>
                                </div>
                            </div>
                            <div class="row">
                                <h2>Final Design</h2>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    Our final design utilized two axles and a gear ratio of 1:7, providing a large
                                    amount of power to be able to lift large amounts. Our design was able to lift over 1
                                    kilogramme but did so slowly due to the large gear ratio.
                                </div>
                                <div class="col-6">
                                    <img src={require('../IMG_0890.jpeg')}
                                         style={{maxWidth: '100%', maxHeight: '100%'}}/>
                                    <p style={{fontSize: '.5rem', color: '#adadad'}}>The largest amount of weight that
                                        we tested on the winch, > 1 kg</p>
                                </div>
                                <div className="col-6">
                                    <img src={require('../IMG_0881.jpeg')}
                                         style={{maxWidth: '100%', maxHeight: '100%'}}/>
                                    <p style={{fontSize: '.5rem', color: '#adadad'}}>Close up of the gears
                                        attatched.</p>
                                </div>
                            </div>
                            <div className="row">
                                <h2>Project Role</h2>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    My role was to assist in building the winch. I helped assemble the winch, find the
                                    necessary parts, and find an ideal gear ratio to build the winch with. I assisted in
                                    writing the documentation and testing the vehicle.
                                </div>

                            </div>
                        </div>
                        <br/>
                        <br/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Winch
