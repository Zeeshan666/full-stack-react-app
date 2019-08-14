
import React, { Component } from 'react'
import {Navbar,NavbarBrand,Jumbotron,Nav,NavItem,NavbarToggler,Button,ModalBody,Modal,ModalHeader,Collapse
    ,Form, FormGroup, Input, Label} from 'reactstrap'
import {NavLink} from 'react-router-dom'

export default class Footer extends Component {
 
constructor(props){
    super(props)
    this.state={
        isNavOpen:false,
        isModalpen :false
    }
    this.toggleNav=this.toggleNav.bind(this)
    this.toggleModal=this.toggleModal.bind(this)
    this.handleLogin = this.handleLogin.bind(this);

}

toggleNav(){
this.setState({
    isNavOpen:!this.state.isNavOpen
})
}

handleLogin(event) {
    this.toggleModal();
    alert("Username: " + this.username.value + " Password: " + this.password.value
        + " Remember: " + this.remember.checked);
    event.preventDefault();

}

toggleModal(){
    this.setState({
        isModalOpen:!this.state.isModalOpen
    })
    }
  render() {
    return (
      <React.Fragment>
      <Navbar  dark  expand="md"> 
      <div className="container">
<NavbarToggler onClick={this.toggleNav} />
        <NavbarBrand className="" href="/">
        <img  src="assets/images/logo.png" height="30" width="41" alt="my cafe" />
        </NavbarBrand>
        <Collapse isOpen={this.state.isNavOpen} navbar>
        <Nav navbar  className="mr-auto">
            <NavItem>
                <NavLink className='nav-link' to="/home">
                   <span className="fa fa-home fa-lg">Home</span>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className='nav-link' to="/Menu">
                   <span className="fa fa-list fa-lg">Menu</span>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className='nav-link' to="/Aboutus">
                   <span className="fa fa-info fa-lg">About Us</span>
                </NavLink>
            </NavItem>
        
            <NavItem>
                <NavLink className='nav-link' to="/contactus">
                   <span className="fa fa-list fa-lg">Contact Us</span>
                </NavLink>
            </NavItem>

        </Nav>

        <Nav className="l-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                                </NavItem>
                            </Nav>
                            
        </Collapse>
     

      </div>
        </Navbar>
        <Jumbotron>
            <div className="container">
                <div className="row row-header">
                    <div className="col-12 col-sm-6">
                               <h1>course react and redux</h1>
                               <p>Lorem ipsum dolor sit amet consec tetur, adipisicing elit. Nulla, quos alias debitis
                     corrupti soluta saepe reiciendis ad magni ipsum quia minima amet, nesciunt eum dolores?</p>
                    </div>

                </div>
            </div>
        </Jumbotron>
        <Modal isOpen={this.state.isModalOpen} toggle={this.isModalOpen}>
      <ModalHeader toggle={this.toggleModal}>
          LOGIN
      </ModalHeader>
      <ModalBody>

      <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                        
      </ModalBody>

        </Modal>
      </React.Fragment>
    )
  }
}
