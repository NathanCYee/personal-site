import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './animate.css';
import './bootstrap.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron,
    Button,
} from 'reactstrap';
import Router from './RouterApp';

ReactDOM.render(<Router />, document.getElementById('root'));
