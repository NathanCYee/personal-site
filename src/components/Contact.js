import React, { Component } from 'react';
import Typist from 'react-typist';

class Contact extends Component {
    render() {
        return(
            <div>
                <div class="gradient4 jumbotron jumbotron-fluid">
                    <div class="container ">
                        <Typist
                            className="Typist"
                            cursor={{ show: false }}
                        >
                            <span className="my-custom-class"><h1 class="display-3">Contact</h1></span>

                        </Typist>
                    </div>
                </div>
            </div>
        )
    }
}
export default Contact