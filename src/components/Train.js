import React, { Component } from 'react';
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop'
import { Badge } from 'reactstrap';
import { Tooltip } from 'reactstrap';
import '../index.css';
import '../animate.css';

class Train extends Component {
    render() {
        return(
            <div class="parallax">
                <div class="fillheight parallax__layer parallax__layer--back jumbotron jumbotron-fluid">
                    <center><div class="container animated fadeIn">
                        <img src={require('../7.png')}/>
                        <h1 class="display-3"  style={{fontWeight: 'bold'}}>Virtual Toy Train</h1>
                        <div><h5><Badge color="secondary" id="class">Introduction to Engineering and Design</Badge> <Badge color="secondary">~1 Month(February 2018)</Badge></h5></div>
                    </div></center>
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
                                    <p>&nbsp;&nbsp;Our goal for this train project was to create a virtual toy train that appeals to children by allowing to download, create, and customize their own toy train. We took the virtue of creation and customization and turned to our favourite childhood toy-building blocks. The building blocks allowed near infinite customizability and promoted good engineering, and design to us and children who would use the product.</p>
                                    <center>
                                        <img src={require('../6.png')} style={{ maxWidth: '60%', maxHeight: '60%' }}/>
                                        <p style={{fontSize: '.25rem', color:'#adadad'}}>The train container used on the train, each piece seen is an individual piece that was fully grounded</p>
                                    </center>
                                    <p>&nbsp;&nbsp;The peg and hole design would be easy to make and a perfect project to practice parametric modeling, and with train cars being modeled with hundreds of unique pieces, this was important to be able to scale bricks from 1x1 to 6x28. As well as inventor tools such as mirror and clone to cut creation time in half. With a project that has over 500 parts, members of our group had to manage their responsibilities, teamwork, backups, and check ins were important to ensure the product was able work by the due date as well as to make decisions that conformed with the design guidelines and limitations. </p>
                                </div>
                            </div>
                            <div class="row">
                                <h2>Rendering</h2>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    For professional renders, inventor studio was used to place the train into environments that seemed fit-such as a lego track or space. These renders could be used as boxart, promotional materials, or even media used for our slides as we had done. Videos were also rendered to feature the minutiae parts of the train in motion, such as moving wheels, interior details, and the train driving.
                                </div>
                                <div class="col-6">
                                    <img src={require('../Image.png')} style={{ maxWidth: '100%', maxHeight: '100%' }}/>

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