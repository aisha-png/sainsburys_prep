import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Cart from '../cart/Cart';
import products from '../../data/Products';

const Navigation = (props) => {

    const [show, setShow] = useState(false);
    
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  return (
    <>
        <Navbar className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#">
            <h3 style={{color: '#F06C00'}}>
                <b>
                Sainsbury's
                </b>
            </h3>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Offcanvas
              placement="end"
            >
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Login</Nav.Link>
                  <Nav.Link href="#action2">Register</Nav.Link>


            <Button 
                variant="primary" 
                onClick={handleShow}
                style={{ backgroundColor: '#F06C00', borderColor: '#F06C00' }}
            >
                Cart 
                {props.totalItems > 0 &&  
                    <span className="badge">{props.totalItems}</span>
                }
            </Button>

            <Modal 
                show={show} 
                onHide={handleClose} 
            >
                <Cart 
                    handleClose={handleClose} 
                    handleShow={handleShow} 
                    cartItems={props.cartItems} 
                    removeOneFromCart={props.removeOneFromCart} 
                    addToCart={props.addToCart} 
                    deleteFromCart={props.deleteFromCart}
                />
            </Modal>


                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  )
}

export default Navigation