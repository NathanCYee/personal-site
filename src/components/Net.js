import React, {Component} from 'react';
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop'
import {Badge} from 'reactstrap';
import {Tooltip} from 'reactstrap';
import '../index.css';
import '../animate.css';
import {ArrowDown} from 'react-feather';

class Net extends Component {
    render() {
        return (
            <div class="parallax">
                <div class="fillheight parallax__layer parallax__layer--back jumbotron jumbotron-fluid">
                    <center>
                        <div class="container animated fadeIn">
                            <h1 class="display-3" style={{fontWeight: 'bold'}}>Unknown Network Traffic</h1>
                            <div><h5><Badge color="secondary" id="class">PLTW Cybersecurity</Badge> <Badge
                                color="secondary">March 2020</Badge></h5></div>
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
                                    <p>In this assignment, we were to secure the network of a fictional water treatment
                                        plant. As a jigsaw assignment, each group in the class split up to present a
                                        separate part of the assignment. We were to talk about how to find ‘footprints’,
                                        which are a trail of network activity that are possible evidence for malicious
                                        activity.
                                    </p>
                                </div>
                                <div className="col-6">
                                    <img src={require('../net_diagram.png')}
                                         style={{maxWidth: '100%', maxHeight: '100%'}}/>
                                    <p style={{fontSize: '.5rem', color: '#adadad'}}>A diagram of the network topology
                                        attatched.</p>
                                </div>
                            </div>
                            <div class="row">
                                <h2>Baselining the Network</h2>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    We used the internet to remotely connect to our computer TargetWindows01. From there
                                    we remotely connected to the Web01 computer and executed a Wireshark scan of the
                                    network under normal operation. This is known as the baseline scan and will be used
                                    to compare to anomalous network activity.
                                </div>
                                <div class="col-6">
                                    <img src={require('../wireshark.png')}
                                         style={{maxWidth: '100%', maxHeight: '100%'}}/>
                                    <p style={{fontSize: '.5rem', color: '#adadad'}}>A picture of the wireshark scan</p>
                                </div>
                            </div>
                            <div className="row">
                                <h2>Simulating Malicious Activity</h2>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    We used a tool called Nmap, a network scanning tool, and its graphical interface
                                    Zenmap. The tool provided us with information about the IP addresses and devices on
                                    the network such as the open ports and the MAC addresses. This can be used like us
                                    for diagnostic purposes, but it can be used by a hacker to find information about a
                                    network.
                                </div>
                                <div className="col-6">
                                    <img src={require('../zenmap.png')}
                                         style={{maxWidth: '100%', maxHeight: '100%'}}/>
                                    <p style={{fontSize: '.5rem', color: '#adadad'}}>The results of a Zenmap scan</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    In order to record an intrusion, we simulated suspicious usage of the Web01 server
                                    from the PumpMonitor server. We started wireshark before connecting to PumpMonitor
                                    and using the text-based lynx browser to view the webpage hosted on Web01 server. We
                                    then also used FTP to transfer a file from PumpMonitor to Web01. This could be
                                    indicative of a hacker stealing data from the pump.
                                </div>
                                <div className="col-6">
                                    <img src={require('../lynx.png')}
                                         style={{maxWidth: '100%', maxHeight: '100%'}}/>
                                    <p style={{fontSize: '.5rem', color: '#adadad'}}>The data retrieved from Web01</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    This behavior is not supposed to happen due to firewall rules. After this, we
                                    isolated the anomaly, downloaded the data, and handed off the data to the next part
                                    of the assignment in which we were to find and fix the firewall configuration that
                                    allowed this intrusion to happen.
                                </div>
                            </div>
                            <div className="row">
                                <h2>Project Role</h2>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    In this project, I worked on the web server to record and simulate events. I
                                    screenshotted the results of my experiments and presented it to my teammates so that
                                    we could relate our results to the information that we learned.
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

export default Net
