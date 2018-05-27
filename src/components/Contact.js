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
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            You can contact me at my email, yee.nathan.c@gmail.com, I get alerts on my watch and usually try to respond by the end of day
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Contact