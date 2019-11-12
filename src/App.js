import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,Row} from 'reactstrap';

import image from "./images/thumb.jpg";
import image1 from  "./images/pi.jpg";
import image2 from  "./images/tintin.jpg";
import image3 from "./images/malefique.jpg";

import logo from "./images/logo.png";
import MyCard from './components/MyCard';

class App extends Component  {
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
    var listCards = [
      { CardName: "Maléficiant", CardDescription: "ceci est une description", CardImage: image },
      { CardName: "The adventure of Tintin", CardDescription: "description1", CardImage: image1 },
      { CardName: "Hobbit", CardDescription: "description2", CardImage: image2 },
      { CardName: "Exists", CardDescription: "description3", CardImage: image3 },
      { CardName: "Terminator", CardDescription: "description4", CardImage: image1 },
      { CardName: "Zoro", CardDescription: "description5", CardImage: image },
      { CardName: "le fleuve tranquile", CardDescription: "description6", CardImage:image2},
      { CardName: "Madness", CardDescription: "description7", CardImage: image },
    ]
     
     var cardsList = listCards.map(function(card) {
     return < MyCard movieName = { card.CardName } movieDescription = { card.CardDescription } movieImage = { card.CardImage} />;
     });
     
  
  return (
    <Container>
      <Row>
         <Navbar color="dark" light expand="md">
          <span className="navbar-brand">
                <img src= {logo } width="30" height="30" className="d-inline-block align-top" alt="logo myMoviz"/>
              </span>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="" navbar>
                <NavItem>
                  <NavLink href="/" style={{color:'white'}}>Last films</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap" style={{color:'white'}}>My movies</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle style={{color:'white'}} nav caret>
                    Category
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      horror
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      thrillers
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
      </Row>
      <Row >
     { cardsList }
      </Row>
      </Container>
  );  
    }
}


export default App;
