import React, { Component } from "react";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from "reactstrap";



class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">NYT (REACT) GOOGLE BOOKS SEARCH</NavbarBrand>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="">Search</NavLink>
                                 <NavLink href="">Saved</NavLink>
                            </NavItem>
                        </Nav>
                    </Container>
                </Navbar>
                
            </div>
        );
    }

}
export default NavBar;