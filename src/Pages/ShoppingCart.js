import React, { Component } from 'react';

import { YearPicker, MonthPicker } from 'react-dropdown-date';
import { Container, Navbar, Nav, Row, Col,Breadcrumb, Card, Button,Form } from "react-bootstrap";
import { BsPerson,BsDot,BsFillCreditCard2FrontFill,BsInstagram,BsTwitter } from "react-icons/bs";
import { FaShoppingBag,FaCreditCard,FaWallet,FaFacebookF,FaPinterestP } from "react-icons/fa";
import {VscGlobe} from "react-icons/vsc";

import "../Styles/ShoppingCart.css";
import cartprod from "../Images/1 84.png";
import cartprod2 from "../Images/4 5.png";
import footer from "../Images/Rectangle 41.png";
import ad from "../Images/Rectangle.png";
import adim from "../Images/ad.png";
import el from "../Images/Ellipse 89.png";
import cir from "../Images/Mask Group (10).png";





function ShoppingCart() {

    
    
    return (
        <>
            <Container>
                <Navbar collapseOnSelect expand="lg" variant="light" className="navigate">
                    <Container>
                        <Navbar.Brand href="#home" className="brand">LOGO</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#features" className="mx-5 nav_l">SHOP +</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#features" className="me-5 nav_l">THE SCIENCE</Nav.Link>
                                <Nav.Link href="#pricing" className="me-5 nav_l">OUR STORY</Nav.Link>
                                <Nav.Link href="#deets" className="me-5 nav_l">SUBSCRIPTION</Nav.Link>
                                <Nav.Link href="#memes">
                                    <BsPerson className="me-5 nav_l" fontSize={22} />
                                </Nav.Link>
                                <Nav.Link href="#memes" >
                                    <FaShoppingBag className="nav_l" fontSize={22} />
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>


                <Row className="mt-5">
                    <Col md={{span:3,offset:0}} sm={{ span: 10, offset: 1 }} className="mx-3 mt-5">
                    <Breadcrumb>
  <Breadcrumb.Item href="#" style={{textDecoration:"none"}} className="bread">Home</Breadcrumb.Item>
  {/* <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
    Library
  </Breadcrumb.Item> */}
  <Breadcrumb.Item active className="bread">Data</Breadcrumb.Item>
</Breadcrumb>
                    </Col>
                </Row>
                <Row>
                    <Col md={{span:4,offset:0}} sm={{ span: 10, offset: 1 }} className="mx-3">
                    <p className="sc-title">Shopping Cart</p>
                    </Col>
                </Row>

                <Row>
                    <Col md={{span:7,offset:0}} sm={{ span: 8, offset: 0 }} className="mx-3">
                    <Card body className="pt-5 pb-5 mt-5 sc-card">
                       <Row>
                           <Col md={{span:8,offset:0}} sm={{ span: 8, offset: 0 }} className="d-flex">
                           <p className="sc-card-t px-4 mt-3">Micheal Smith</p>
                           <p className="sc-card-t mt-3">+806-445-4567</p>
                           </Col>
                           <Col md={{span:2,offset:0}} sm={{ span: 4, offset: 2 }}>
                           <Button variant="" className="sc-card-btn m-0">Change</Button>
                           </Col>
                           </Row> 
                    </Card>
                    <Row>
                     
                        <Col>
                            <Card body className="pt-5 pb-5 mt-5 sc-card">
                                                   <Row>
                               <Col md={{span:7,offset:0}} sm={{ span: 8, offset: 0 }} className="d-flex">
                               <p className="sc-card-t px-4 mt-3">New Civil Lane, Salt Lake, Utah United States, 2345 Avenue</p>
                               
                               </Col>
                               <Col md={{span:3,offset:1}} sm={{ span: 4, offset: 2 }}>
                               <Button variant="" className="sc-card-btn ml-5">Change</Button>
                               </Col>
                               </Row> 
                                                </Card>
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col>
                        <Card body className="pay-method-title mt-5">
                        <Row>
                            <Col md={{span:7}} className="d-flex">
                            <BsDot fontSize={50} color="#702283"/>
                            <FaCreditCard fontSize={20} color="#702283" className="mt-3"/>
                            <p className="pay-meth-t mt-2 mx-5">Payment Method</p>
                            </Col>
                            
                        </Row>
                        
                        </Card>
                        </Col>
                    </Row>





                    {/* -------------------------------------------------- */}
                    <Row className="mt-5 mx-5">
                            <Col md={{span:7}} className="d-flex">
                            <BsFillCreditCard2FrontFill fontSize={30} style={{border:"1px solid black",borderRadius:"5px",padding:"0.8%"}}/>
                            <p className="pay-way mx-5">Debit / Credit Card</p>
                            </Col>
                        </Row>
                    <Row className="mt-5">
                        <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label style={{fontSize:"18px",lineHeight:"152.9%"}}>Enter Card Number</Form.Label>
                                <Form.Control type="" placeholder="" className="card-no p-3"/>
                               
                              </Form.Group>
                        </Form>

                        </Col>
                    </Row>

                    <Row className="mt-4">
                        <Col md={{span:6}}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label style={{fontSize:"18px",lineHeight:"152.9%"}}>Valid Date</Form.Label>
                                <Card body className='card-date'>
                                <Row>
                                    <Col md={{span:5,offset:1}} className="pt-1 pb-1">
                                        <MonthPicker
                                                  defaultValue={'MM'}
                                                  numeric                   // to get months as numbers
                                                  short                     // default is full name
                                                  caps                      // default is Titlecase
                                                  endYearGiven              // mandatory if end={} is given in YearPicker
                                        
                                                />
                                    </Col>
                                             <Col md={{span:4,offset:1}} className="pt-1 pb-1">
                                                 <YearPicker
                                                  defaultValue={'YYYY'}
                                                    start={1995}
                                                 
                                                    />
                                                    </Col>
                                </Row>
                                </Card>
                               
                              </Form.Group>
                        </Form>
                        </Col>
                        <Col md={{span:4}}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label style={{fontSize:"18px",lineHeight:"152.9%"}}>CVV</Form.Label>
                                <Form.Control type="Password" placeholder="***" className="card-no p-3 px-4"/>
                               
                              </Form.Group>
                        </Form>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col>
                        <p className="crd-det-msg">Your Card Details Will Be Securely Saved For Faster Payments. Your CVV Will Not Be Stored</p>
                        </Col>
                    </Row>

                    <Row className="mt-4">
                        <Col className="d-flex">
                        <Form.Check type="radio" aria-label="radio 1" className="mt-1"/>
                        <Form.Label><VscGlobe fontSize={35} style={{border:"1px solid black",borderRadius:"5px",padding:"2%"}} className="mx-4"/> <span className="net-b">Net Banking</span></Form.Label>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col className="d-flex">
                        <Form.Check type="radio" aria-label="radio 1" className="mt-1"/>
                        <Form.Label><FaWallet fontSize={35} style={{border:"1px solid black",borderRadius:"5px",padding:"2%"}} className="mx-4"/> <span className="net-b">Google / Apple Wallet</span></Form.Label>
                        </Col>
                    </Row>
                    </Col>
                    <Col md={{span:4,offset:0}}>
                    <Card body className="ord-card pt-5 pb-4">
                        <Row>
                            <Col md={{span:6,offset:1}} sm={{span:8,offset:1}}>
                                <p className="ord-title">Your Order</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={{span:5,offset:1}} sm={{span:10,offset:1}}>
                                <Card body className="ord-card2">
                                    <img src={cartprod} alt="" className="cart-prod-img mx-4"/>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={{span:6,offset:1}} sm={{span:10,offset:1}}>
                                <p className="ord-prod-name mt-4">Basic-C-Organic</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={{span:4,offset:1}} sm={{span:8,offset:1}}>
                                <p className="ord-prod-price mb-5">€49.95</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={{span:4,offset:1}}>
                            <Button variant="" className="total-btn px-4">Total <span className="t-btn-price mx-5">€49.95</span></Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={{span:4,offset:1}}>
                            <Button variant="" className="pay-btn mt-4">Pay €49.95</Button>
                            </Col>
                        </Row>
                    </Card>


                    <Row className="mt-5">
                        <Col>
                        <Card body className="ord-card pt-3 pb-4 mt-5">
                        <Row>
                            <Col md={{span:7,offset:1}} sm={{span:8,offset:1}}>
                                <p className="sp-off">Special Offer</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={{span:10,offset:1}} sm={{span:8,offset:1}}>
                                <p className="sp-off-det">Buy Basic-C-Organic With Basic Oils and get Flat 30% Off</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={{span:5,offset:1}} sm={{span:10,offset:1}}>
                                <Card body className="ord-card2">
                                    <img src={cartprod} alt="" className="cart-prod-img mx-4"/>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col md={{span:5,offset:1}} sm={{span:10,offset:1}}>
                                <Card body className="ord-card2">
                                    <img src={cartprod2} alt="" className="cart-prod-img mx-4"/>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            <Col md={{span:4,offset:1}}>
                            <Button variant="" className="total-btn2 px-3">Total <del className="px-5">€150.98</del> <span className="t-btn-price2 me-1">€107.95</span></Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={{span:4,offset:1}}>
                            <Button variant="" className="pay-btn mt-4">Pay €107.00</Button>
                            </Col>
                        </Row>
                        </Card>
                        </Col>
                    </Row>
                    </Col>

                </Row>


               
            </Container>



            <Container fluid className="cont-f">
        <img src={ad} alt="" className="ad-img" />
        <Row className="ad-rw">
          <Col className="ad-col1">
            <img src={el} alt="" className="ad-el" />
            <img src={adim} alt="" className="ad-fam" />
            <img src={cir} alt="" className="ad-cir" />
          </Col>
          <Col className="ad-text">
            <p className="ad-h">Feel great or your money <br /> back.</p>
            <p className="ad-s">If we don’t meet your expectation in any way, we’ll refund you in <br /> full – shipping included.</p>
            <Button variant="" className="ad-btn">Shop Now</Button>
          </Col>
        </Row> <br /><br /><br /><br /><br />
        <img src={footer} alt="" className="f-img" />
        <Row className="text-center f-rw">
          <Col>
            <p className="f-logo">LOGO</p>
            <Row className="f-rw2">
              <Col className="rw2-cl1">
                <div className="f-menu">
                  <a href=""><p>Shop</p></a>
                  <a href=""><p>The Science</p></a>
                  <a href=""><p>Our Story</p></a>
                  <a href=""><p>Blog</p></a>
                </div>
              </Col>
              <Col className="rw2-cl2">
                <a href=""><p>Subscription</p></a>
                <a href=""><p>Contact Us</p></a>
                <a href=""><p>FAQs</p></a>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="text-center f-nl">
          <Col>
            <p className="f-newsl">Sign Up For Our Newsletter</p>
          </Col>
        </Row>
        <Row className="text-center f-mail">
          <Col>
            <span><input type="text" className="f-sub" placeholder="My email address" /> <Button variant="" className="f-sub-btn">Subscribe</Button></span>
          </Col>
        </Row>
        <Row className="text-center f-rw-sm">
          <Col>
            <Button variant="" className="f-smi">
              <FaFacebookF fontSize={20} />
            </Button>
            <Button variant="" className="f-smi">
              <BsTwitter fontSize={20} />
            </Button>
            <Button variant="" className="f-smi">
              <BsInstagram fontSize={20} />
            </Button><Button variant="" className="f-smi">
              <FaPinterestP fontSize={20} />
            </Button>
          </Col>
        </Row>
        <Row className="text-center f-last">
          <Col>
            <p className="f-nav f-nav1">© 2020 Basal Basics.</p>

          </Col>
          <Col>
            <Button variant="link" className="f-nav">Privacy Policy</Button>
          </Col>
          <Col>
            <Button variant="link" className="f-nav">Terms & Conditions</Button>
          </Col>
          <Col>
            <Button variant="link" className="f-nav">Return & Refund policy</Button>
          </Col>
          <Col>
            <Button variant="link" className="f-nav">Order & Payment</Button>
          </Col>
          <Col>
            <Button variant="link" className="f-nav">Warranty & Complaints</Button>
          </Col>
        </Row>
      </Container>
        </>
    );
}


export default ShoppingCart;

