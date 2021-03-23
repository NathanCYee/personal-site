import React, { Component } from 'react';
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop'
import { Badge } from 'reactstrap';
import { Tooltip } from 'reactstrap';
import '../index.css';
import '../animate.css';
import { ArrowDown } from 'react-feather';

class Train extends Component {
    render() {
        return(
            <div class="parallax">
                <div class="fillheight parallax__layer parallax__layer--back jumbotron jumbotron-fluid">
                    <center><div class="container animated fadeIn">
                        <h1 class="display-3"  style={{fontWeight: 'bold'}}>Solar Hydrogen Vehicle</h1>
                        <div><h5><Badge color="secondary" id="class">Principles of Engineering</Badge> <Badge color="secondary">2 Weeks(November 2018)</Badge></h5></div>
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
                                    <p>&nbsp;&nbsp;For the <a href={"https://docs.google.com/document/d/1JFcg1FzFN4Z6ugxkeM5CzB_pVhNAoD8DKrtY6KdwOMk/edit"}>project</a>, our goal was to make a vehicle that was able to utilize either hydrogen fuel cells or solar cells in order to understand the upsides and downsides for each power source. The entire process of brainstorming to building was to be documented and the most efficient car received bonus points.
                                    </p>
                                    </div>
                            </div>
                            <div class="row">
                                <h2>Final Design</h2>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    Our final design utilized the lightest parts possible in order to reduce the mass that the motor had to move. We used flat metal vex parts on the top and standoffs and pillow blocks to mount the wheels. The flat metal pieces had extra screw points which allowed us to mount a standoff for hydrogen or collars and axles to mount solar, making the vehicle a flexible testbed. A gear ratio of 7:3 was implemented so that the wheel could output an optimal speed as well as due to size constraints.
                                </div>
                                <div class="col-6">
                                    <img src={require('../IMG_3600.JPG').default} style={{ maxWidth: '100%', maxHeight: '100%' }}/>
                                    <p style={{fontSize: '.5rem', color:'#adadad'}}>The final design with the gear ratio showcased and the solar panel mounting bracket attatched</p>
                                </div>
                                <div className="col-6">
                                    <img src={require('../IMG_3571.JPG').default}
                                         style={{maxWidth: '100%', maxHeight: '100%'}}/>
                                    <p style={{fontSize: '.5rem', color:'#adadad'}}>The hydrogen mounting solution attatched.</p>
                                </div>
                            </div>
                            <div className="row">
                                <h2>Project Role</h2>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    My task in the project was the project manager, I had to create and share the files as well as submit them to Ms. Chou for grading. For the tracking of team progress, I created a gantt chart which detailed our optimal goals for the day as well as who did them. Since the list was only updated a few times per day, I also assisted in building the vehicle as well as recording tests.

                                </div>
                                <div className="col-6">
                                    <img src={require('../Screen Shot 2018-12-08 at 5.27.43 PM.png')}
                                         style={{maxWidth: '100%', maxHeight: '100%'}}/>
                                    <p style={{fontSize: '.5rem', color: '#adadad'}}>The Gantt chart that we used</p>
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

export default Train
