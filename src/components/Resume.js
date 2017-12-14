import React, { Component } from 'react';
import Typist from 'react-typist';

class Resume extends Component {
    render() {
        return(
            <div>
                <div>
                    <div class="gradient3 jumbotron jumbotron-fluid">
                        <div class="container ">
                            <Typist>
                                <span className="my-custom-class"><h1 class="display-3">Resume</h1></span>

                            </Typist>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Resume