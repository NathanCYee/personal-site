import React, { Component } from 'react';
import Header from './layout/Header';
import Content from './layout/Content';
import {BrowserRouter as Router} from 'react-router-dom';


class RouterApp extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header/>
                    <Content/>
                </div>
            </Router>
        );
    }
}

export default RouterApp;
