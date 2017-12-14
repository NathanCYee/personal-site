import React, { Component } from 'react';
import Typist from 'react-typist';

class Projects extends Component {
    render() {
        return(
            <div>
                <div class="gradient2 jumbotron jumbotron-fluid">
                    <div class="container ">
                        <Typist>
                            <span className="my-custom-class"><h1 class="display-3">Projects</h1></span>

                        </Typist>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects