import React, { Component } from 'react';
import Typist from 'react-typist';
import Iframe from 'react-iframe'

class Resume extends Component {
    render() {
        return(
            <div>
                <div>
                    <div class="gradient3 jumbotron jumbotron-fluid">
                        <div class="container ">
                            <Typist
                                className="Typist"
                                cursor={{ show: false }}
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
                            <h3>Google Doc: <a href={"https://docs.google.com/document/d/1gCj-zVEu58vG_AI_c-CGPqUe1UUBO3z7W18x0vH8H78/edit?usp=sharing"}>https://docs.google.com/document/d/1gCj-zVEu58vG_AI_c-CGPqUe1UUBO3z7W18x0vH8H78/edit?usp=sharing</a></h3>
                        </center>
                    </div>
                </div>
            </div>
        )
    }
}

export default Resume