import React, {Component} from 'react';
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop'
import ReactGoogleSlides from "react-google-slides";
import {Badge} from 'reactstrap';
import {Tooltip} from 'reactstrap';
import '../index.css';
import '../animate.css';
import {ArrowDown} from 'react-feather';

class BBB extends Component {
    render() {
        return (
            <div class="parallax">
                <div class="fillheight parallax__layer parallax__layer--back jumbotron jumbotron-fluid">
                    <center>
                        <div class="container animated fadeIn">
                            <h1 class="display-3" style={{fontWeight: 'bold'}}>Bikes, Boards, and Beyond</h1>
                            <div><h5><Badge color="secondary" id="class">PLTW Cybersecurity</Badge> <Badge
                                color="secondary">1 Week(January 2020)</Badge></h5></div>
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
                                    <p>We were given an example site - bikes, boards, and beyond – to understand
                                        penetration testing and the process behind testing for cyber vulnerabilities.
                                        This project introduced me to a rough outline of a cyber vulnerability
                                        assessment procedure for a client: in getting approval to explore the systems,
                                        submitting a Statement of Work (SOW), and presenting a Penetration Test Report.
                                    </p>
                                </div>
                            </div>
                            <div class="row">
                                <h2>Statement of Work (SOW)</h2>
                            </div>
                            <div class="row">
                                <div className="col-4">
                                    <img src={require('../SOW.png')} style={{maxWidth: '100%', maxHeight: '100%'}}/>
                                </div>
                                <div class="col-8">
                                    The statement of work described the timeline for the actions that my group were
                                    going to take during the cyber vulnerability assessment. In our Statement of Work,
                                    we gave our specified timeframe (January 21-27), documents that we will be
                                    presenting, a description of our penetration testing, and the areas where we would
                                    be testing. This Statement of Work would then be presented to our client (our
                                    teacher) before we could continue.
                                </div>
                            </div>
                            <div className="row">
                                <h2>Penetration Test</h2>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <p>In our penetration test, we found several vulnerabilities hackers could use to
                                        compromise the server.</p>
                                    <b>Server configuration</b>
                                    <ul>
                                        <li>Firewall was disabled - There were no protections whatsoever on the firewall
                                            to
                                            prevent malicious traffic
                                        </li>
                                        <li>Mail was still on - Mail has several vulnerabilities which can compromise
                                            the
                                            server
                                        </li>
                                        <li>Directory browsing was on - Users can brute force URLs and find files that
                                            they
                                            were not supposed to find
                                        </li>
                                        <li>Log files were stored publicly - If log files are found, that can compromise
                                            other
                                            users IPs and browsing activity.
                                        </li>
                                    </ul>
                                    <b>Firewall</b>
                                    <ul>
                                        <li>FTP was enabled - FTP has several vulnerabilities that can allow hackers to
                                            inject/steal files from the web server
                                        </li>
                                        <li>Mail was enabled</li>
                                    </ul>
                                    <b>Website</b>
                                    <ul>
                                        <li>Vulnerable to XSS scripting - Code can be injected into user’s client side
                                            websites and steal their data
                                        </li>
                                        <li>No CAPTCHA key - CAPTCHA prevents bots, this makes the site vulnerable to
                                            botnet attacks
                                        </li>
                                        <li>Form data is not encrypted - This makes data vulnerable to being stolen by
                                            man-in-the-middle attacks.
                                        </li>
                                    </ul>
                                    <p>To solve these issues, we implemented immediate server-side fixes and recommended
                                        some changes to the code on the website.</p>
                                    <b>Implemented</b>
                                    <ul>
                                        <li>Turned on the firewall</li>
                                        <li>Turned off mail and disabled the port in the firewall</li>
                                        <li>Turned of FTP and disabled the port in the firewall</li>
                                        <li>Turned off directory browsing</li>
                                        <li>Moved the log files out of the inetpub folder</li>
                                    </ul>
                                    <b>Suggested Fixes</b>
                                    <ul>
                                        <li>Wrap user comments to prevent XSS code from being executed</li>
                                        <li>Rewrite forms to encrypt form data</li>
                                        <li>Regenerate the CAPTCHA key</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <ReactGoogleSlides
                                        width={640}
                                        height={480}
                                        slidesLink="https://docs.google.com/presentation/d/1M8peKOAWeEqU5qKE0p7xN8R-Ri6HjKqXuJNf02o2fWo"
                                        showControls
                                    />
                                </div>
                                <p style={{fontSize: '.75rem', color: '#adadad'}}>A presentation prepared to describe
                                    the results of the penetraton test as well as screenshots from the exploits</p>
                            </div>

                            <div className="row">
                                <h2>Project Role</h2>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    As a project manager, I had to create and manage the documents to present to our
                                    client as well as direct certain tasks to my teammates. I also participated in the
                                    penetration testing, where I used my technical skills learned in class to attack the
                                    site as well as check the server configuration. I had to document my actions and
                                    their results in order to present them to the client.
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

export default BBB
