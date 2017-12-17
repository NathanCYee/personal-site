import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
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
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import RouterApp from './RouterApp';

ReactDOM.render(<RouterApp />, document.getElementById('root'));
