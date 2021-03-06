import React, { Component } from 'react';
import {Link} from 'react-router-dom'
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
class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return(
            <div>
                <Navbar color="light" light expand="md" fixed="top">
                    <NavbarBrand href="/personal-site/">Nathan Yee</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link class="nav-item nav-link" to={"/personal-site/pages/home"}>About Me</Link>
                            </NavItem>
                            <NavItem>
                                <Link class="nav-item nav-link" to={"/personal-site/pages/resume"}>Resume</Link>
                            </NavItem>
                            <NavItem>
                                <Link class="nav-item nav-link" to={"/personal-site/pages/work"}>Work Experience</Link>
                            </NavItem>
                            <NavItem>
                                <Link class="nav-item nav-link" to={"/personal-site/pages/projects"}>Projects</Link>
                            </NavItem>
                            <NavItem>
                                <Link class="nav-item nav-link" to={"/personal-site/pages/contact"}>Contact</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header