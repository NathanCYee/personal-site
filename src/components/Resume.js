import React, {Component} from 'react';
import Typist from 'react-typist';
import Iframe from 'react-iframe'

class Resume extends Component {
    render() {
        return (
            <div>
                <div>
                    <div class="gradient3 jumbotron jumbotron-fluid">
                        <div class="container ">
                            <Typist
                                className="Typist"
                                cursor={{show: false}}
                            >
                                <span className="my-custom-class"><h1 class="display-3">Resume</h1></span>

                            </Typist>
                        </div>
                    </div>
                    <div>
                        <center><Iframe url="https://nathancyee.github.io/personal-site/NathanYeeResume.pdf"
                                        width="450px"
                                        height="800px"
                                        id="myId"
                                        className="myClassname"
                                        display="initial"
                                        position="relative"
                                        allowFullScreen/>
                            <h3>PDF: <a href={"https://nathancyee.github.io/personal-site/NathanYeeResume.pdf"}
                                        target="_blank">https://nathancyee.github.io/personal-site/NathanYeeResume.pdf</a>
                            </h3>
                        </center>
                    </div>
                </div>
            </div>
        )
    }
}

export default Resume