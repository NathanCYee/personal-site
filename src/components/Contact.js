import React, { Component } from 'react';
import Typist from 'react-typist';
import { Table } from 'reactstrap';
import {Link} from "react-router-dom";

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
                            <Table>
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Method</th>
                                    <th>Link</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Email</td>
                                    <td><a href={"mailto:yee.nathan.c@gmail.com"}>yee.nathan.c@gmail.com</a></td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>LinkedIn</td>
                                    <td><a href={"https://linkedin.com/in/nathan-yee-056ab3175"}>linkedin.com/in/nathan-yee-056ab3175</a></td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Location</td>
                                    <td>Dublin, CA</td>
                                </tr>
                                </tbody>
                            </Table>                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Contact