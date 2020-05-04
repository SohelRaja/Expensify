import React, {useState} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Button} from 'reactstrap';
import {startLogout} from '../actions/auth';

export const Header = ({startLogout}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
        <Navbar dark expand="md">
            <div className="container">
                <NavbarToggler onClick={toggle} className="mr-2"/>
                <NavbarBrand className="mr-auto" href="/">
                    Expensify
                </NavbarBrand>
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink 
                                to="/" 
                                activeClassName="is-active" 
                                exact={true}
                                className="nav-link">
                                Dashboard 
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink 
                                to="/create" 
                                activeClassName="is-active" 
                                className="nav-link">
                                Create 
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink 
                                to="/help" 
                                activeClassName="is-active" 
                                className="nav-link">
                                Help 
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Button outline onClick={startLogout}> Logout</Button>
                        </NavItem>
                    </Nav>
                </Collapse>
            </div>
        </Navbar>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);