import { Container, Navbar, Nav, Row, Col,Breadcrumb, Card, Button,Form, Table } from "react-bootstrap";
import { BsPerson,BsDot,BsFillCreditCard2FrontFill,BsInstagram,BsTwitter } from "react-icons/bs";
import { IoIosTrash} from "react-icons/io";

import { FaShoppingBag,FaCreditCard,FaWallet,FaFacebookF,FaPinterestP } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import "../Styles/ProdList.css";
import cartprod from "../Images/1 84.png";
import cartprod2 from "../Images/4 5.png";
import cartprod3 from "../Images/3 4.png";
import footer from "../Images/Rectangle 41.png";
import ad from "../Images/Rectangle.png";
import adim from "../Images/ad.png";
import el from "../Images/Ellipse 89.png";
import cir from "../Images/Mask Group (10).png";



function ProdList(){

    const stars={
        size:30,
        count:5,
        edit:false,
        color:`#F18500`
    }
    return(
        <>
        <Container className="prods">
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

                {/* <Row className="mt-5 pt-5">
                    <Col md={{span:3}} className="mx-5">
                        <p className="headings">Product</p>
                        
                    </Col>
                    <Col md={{span:3}} className="mx-5 px-5">
                        <p className="headings">Details</p>
                    </Col>
                    <Col md={{span:3}} className="mx-5 px-5">
                        <p className="headings">Availablity</p>
                    </Col>
                    <Col md={{span:3}}>
                        <p></p>
                    </Col>
                </Row> */}



<Table className="mt-5 tbl1">
  <thead>
    <tr>
      <th className="headings px-5 pt-5">Product</th>
      <th className="headings px-5 pt-5">Details</th>
      <th className="headings px-5 pt-5">Availablity</th>
      <th> </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="brdr pt-5">
          <Row>
              <Col md={{span:3}}>
              <Card body className="cart-bg">
                <img src={cartprod3} alt="" className="cart1 mx-5 mt-3"/>
              </Card>
              </Col>
          </Row>
          <Row>
              <Col>
              <p className="cart1-n mx-5 mt-4">Basic-C-Organic</p>
              </Col>
          </Row>
      </td>
      <td className="brdr pt-5 det-ava">
                <Row>
                    <Col md={{offset:1}}>
                    <p className="cart1-det1 pt-5">Probiotic With Lactobacillus  <br />
                     Rhamnosus and Reuteri</p>
                    </Col>
                    
                </Row>
                <Row>
                        <Col md={{offset:1}}>
                        <p className="quan">Quantity: 1</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{offset:1}}>
                        <ReactStars
                        {...stars}
                        />
                        </Col>
                        <Col>
                        <p className="mt-3 pe-5">5978</p>
                        </Col>
                    </Row>
      </td>
      <td className="brdr pt-5">
          <Row>
              <Col md={{offset:1}}>
              <p className="stock pt-5">In Stock</p>
              </Col>
              <Col md={{offset:2}}>
              <p className="price pt-5">$190.82</p>
              <Row className="">
                  <Col md={{span:1}}>
                  <p className="add">Add to cart</p>
                  </Col>
              </Row>
              </Col>
              
          </Row>
      </td>
      <td className="pt-5">
          <Row>
              <Col className="mt-5">
              <IoIosTrash fontSize={35} className="del-icon"/>
              </Col>
          </Row>
      </td>
    </tr>
   

    <tr>
      <td className="brdr pt-5">
          <Row>
              <Col md={{span:3}}>
              <Card body className="cart-bg">
                <img src={cartprod} alt="" className="cart1 mx-5 mt-3"/>
              </Card>
              </Col>
          </Row>
          <Row>
              <Col>
              <p className="cart1-n mx-5 mt-4">Basic-C-Organic</p>
              </Col>
          </Row>
      </td>
      <td className="brdr pt-5">
                <Row>
                    <Col md={{offset:1}}>
                    <p className="cart1-det1 pt-5">Probiotic With Lactobacillus <br />
                     Rhamnosus and Reuteri</p>
                    </Col>
                    
                </Row>
                <Row>
                        <Col md={{offset:1}}>
                        <p className="quan">Quantity: 1</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{offset:1}}>
                        <ReactStars
                        {...stars}
                        />
                        </Col>
                        <Col>
                        <p className="mt-3 pe-5">5978</p>
                        </Col>
                    </Row>
      </td>
      <td className="brdr pt-5">
          <Row>
              <Col md={{offset:1}}>
              <p className="stock pt-5">In Stock</p>
              </Col>
              <Col md={{offset:2}}>
              <p className="price pt-5">$190.82</p>
              <Row className="">
                  <Col md={{span:1}}>
                  <p className="add">Add to cart</p>
                  </Col>
              </Row>
              </Col>
              
          </Row>
      </td>
      <td className="pt-5">
          <Row>
              <Col className="mt-5">
              <IoIosTrash fontSize={35} className="del-icon"/>
              </Col>
          </Row>
      </td>
    </tr>

    <tr>
      <td className="brdr pt-5">
          <Row>
              <Col md={{span:3}}>
              <Card body className="cart-bg">
                <img src={cartprod2} alt="" className="cart1 mx-5 mt-3"/>
              </Card>
              </Col>
          </Row>
          <Row>
              <Col>
              <p className="cart1-n mx-5 mt-4">Basic-C-Organic</p>
              </Col>
          </Row>
      </td>
      <td className="brdr pt-5">
                <Row>
                    <Col md={{offset:1}}>
                    <p className="cart1-det1 pt-5">Probiotic With Lactobacillus <br />
                     Rhamnosus and Reuteri</p>
                    </Col>
                    
                </Row>
                <Row>
                        <Col md={{offset:1}}>
                        <p className="quan">Quantity: 1</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{offset:1}}>
                        <ReactStars
                        {...stars}
                        />
                        </Col>
                        <Col>
                        <p className="mt-3 pe-5">5978</p>
                        </Col>
                    </Row>
      </td>
      <td className="brdr pt-5">
          <Row>
              <Col md={{offset:1}}>
              <p className="stock pt-5">In Stock</p>
              </Col>
              <Col md={{offset:2}}>
              <p className="price pt-5">$190.82</p>
              <Row className="">
                  <Col md={{span:1}}>
                  <p className="add">Add to cart</p>
                  </Col>
              </Row>
              </Col>
              
          </Row>
      </td>
      <td className="pt-5">
          <Row>
              <Col className="mt-5">
              <IoIosTrash fontSize={35} className="del-icon"/>
              </Col>
          </Row>
      </td>
    </tr>

    <tr>
      <td className="brdr pt-5">
          <Row>
              <Col md={{span:3}}>
              <Card body className="cart-bg">
                <img src={cartprod3} alt="" className="cart1 mx-5 mt-3"/>
              </Card>
              </Col>
          </Row>
          <Row>
              <Col>
              <p className="cart1-n mx-5 mt-4">Basic-C-Organic</p>
              </Col>
          </Row>
      </td>
      <td className="brdr pt-5">
                <Row>
                    <Col md={{offset:1}}>
                    <p className="cart1-det1 pt-5">Probiotic With Lactobacillus <br />
                     Rhamnosus and Reuteri</p>
                    </Col>
                    
                </Row>
                <Row>
                        <Col md={{offset:1}}>
                        <p className="quan">Quantity: 1</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{offset:1}}>
                        <ReactStars
                        {...stars}
                        />
                        </Col>
                        <Col>
                        <p className="mt-3 pe-5">5978</p>
                        </Col>
                    </Row>
      </td>
      <td className="brdr pt-5">
          <Row>
              <Col md={{offset:1}}>
              <p className="stock pt-5">In Stock</p>
              </Col>
              <Col md={{offset:2}}>
              <p className="price pt-5">$190.82</p>
              <Row className="">
                  <Col md={{span:1}}>
                  <p className="add">Add to cart</p>
                  </Col>
              </Row>
              </Col>
              
          </Row>
      </td>
      <td className="pt-5">
          <Row>
              <Col className="mt-5">
              <IoIosTrash fontSize={35} className="del-icon"/>
              </Col>
          </Row>
      </td>
    </tr>

    
  </tbody>
</Table>

<Row className="cs-btn1">
    <Col md={{offset:5}}>
    <Button variant="" className="continue-btn mb-3 mt-5">Continue Shopping</Button>
    </Col>
</Row>

{/* <!------------------------------------------------------768px------------------------------------------------> */}

<Table className="mt-5" className="tbl2">
  <thead>
    <tr>
      <th className="headings px-5 pt-5">Product</th>
      <th className="headings px-5 pt-5">Details & Availablity</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="brdr brdr2 pt-5">
          <Row>
              <Col md={{span:3}}>
              <Card body className="cart-bg">
                <img src={cartprod3} alt="" className="cart1 mx-5 mt-3"/>
              </Card>
              </Col>
          </Row>
          <Row>
              <Col>
              <p className="cart1-n mx-5 mt-4">Basic-C-Organic</p>
              </Col>
          </Row>
      </td>
      <td className="brdr2 pt-5 det-ava">
                <Row>
                    <Col md={{offset:1}}>
                    <p className="cart1-det1 pt-5">Probiotic With Lactobacillus  <br />
                     Rhamnosus and Reuteri</p>
                    </Col>
                    
                </Row>
                <Row>
                        <Col md={{offset:1}}>
                        <p className="quan">Quantity: 1</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{offset:1}}>
                        <p className="stars">
                            <ReactStars
                            {...stars}
                             />
                        </p>
                        </Col>
                        <Col>
                        <p className="mt-3 pe-5 rev-count">5978</p>
                        </Col>
                    </Row>
                    <Row>
              <Col md={{offset:1}}>
              <p className="stock pt-5">In Stock</p>
              </Col>
              <Row>
                  <Col md={{offset:1}}>
                  <p className="price">$190.82</p>
                  <Row className="">
                      <Col md={{span:1}}>
                      <p className="add">Add to cart</p>
                      </Col>
                      <Col className="" md={{offset:6}}>
              <IoIosTrash fontSize={35} className="del-icon"/>
              </Col>
                  </Row>
                  </Col>
              </Row>
              
          </Row>
          
      </td>
      
    </tr>
   

    <tr>
      <td className="brdr brdr2 pt-5">
          <Row>
              <Col md={{span:3}}>
              <Card body className="cart-bg">
                <img src={cartprod} alt="" className="cart1 mx-5 mt-3"/>
              </Card>
              </Col>
          </Row>
          <Row>
              <Col>
              <p className="cart1-n mx-5 mt-4">Basic-C-Organic</p>
              </Col>
          </Row>
      </td>
      <td className="brdr2 pt-5">
                <Row>
                    <Col md={{offset:1}}>
                    <p className="cart1-det1 pt-5">Probiotic With Lactobacillus <br />
                     Rhamnosus and Reuteri</p>
                    </Col>
                    
                </Row>
                <Row>
                        <Col md={{offset:1}}>
                        <p className="quan">Quantity: 1</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{offset:1}}>
                        <p className="stars">
                            <ReactStars
                            {...stars}
                             />
                        </p>
                        </Col>
                        <Col>
                        <p className="mt-3 pe-5">5978</p>
                        </Col>
                    </Row>
                    <Row>
              <Col md={{offset:1}}>
              <p className="stock pt-5">In Stock</p>
              </Col>
              <Row>
                  <Col md={{offset:1}}>
                  <p className="price">$190.82</p>
                  <Row className="">
                      <Col md={{span:1}}>
                      <p className="add">Add to cart</p>
                      </Col>
                      <Col className="" md={{offset:6}}>
              <IoIosTrash fontSize={35} className="del-icon"/>
              </Col>
                  </Row>
                  </Col>
              </Row>
              
          </Row>
      </td>
      
    </tr>

    <tr>
      <td className="brdr brdr2 pt-5">
          <Row>
              <Col md={{span:3}}>
              <Card body className="cart-bg">
                <img src={cartprod2} alt="" className="cart1 mx-5 mt-3"/>
              </Card>
              </Col>
          </Row>
          <Row>
              <Col>
              <p className="cart1-n mx-5 mt-4">Basic-C-Organic</p>
              </Col>
          </Row>
      </td>
      <td className="brdr2 pt-5">
                <Row>
                    <Col md={{offset:1}}>
                    <p className="cart1-det1 pt-5">Probiotic With Lactobacillus <br />
                     Rhamnosus and Reuteri</p>
                    </Col>
                    
                </Row>
                <Row>
                        <Col md={{offset:1}}>
                        <p className="quan">Quantity: 1</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{offset:1}}>
                        <p className="stars">
                            <ReactStars
                            {...stars}
                             />
                        </p>
                        </Col>
                        <Col>
                        <p className="mt-3 pe-5">5978</p>
                        </Col>
                    </Row>
                    <Row>
              <Col md={{offset:1}}>
              <p className="stock pt-5">In Stock</p>
              </Col>
              <Row>
                  <Col md={{offset:1}}>
                  <p className="price">$190.82</p>
                  <Row className="">
                      <Col md={{span:1}}>
                      <p className="add">Add to cart</p>
                      </Col>
                      <Col className="" md={{offset:6}}>
              <IoIosTrash fontSize={35} className="del-icon"/>
              </Col>
                  </Row>
                  </Col>
              </Row>
              
          </Row>
      </td>
     
    </tr>

    <tr>
      <td className="brdr pt-5">
          <Row>
              <Col md={{span:3}}>
              <Card body className="cart-bg">
                <img src={cartprod3} alt="" className="cart1 mx-5 mt-3"/>
              </Card>
              </Col>
          </Row>
          <Row>
              <Col>
              <p className="cart1-n mx-5 mt-4">Basic-C-Organic</p>
              </Col>
          </Row>
      </td>
      <td className="pt-5">
                <Row>
                    <Col md={{offset:1}}>
                    <p className="cart1-det1 pt-5">Probiotic With Lactobacillus <br />
                     Rhamnosus and Reuteri</p>
                    </Col>
                    
                </Row>
                <Row>
                        <Col md={{offset:1}}>
                        <p className="quan">Quantity: 1</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{offset:1}}>
                        <p className="stars">
                            <ReactStars
                            {...stars}
                             />
                        </p>
                        </Col>
                        <Col>
                        <p className="mt-3 pe-5">5978</p>
                        </Col>
                    </Row>
                    <Row>
              <Col md={{offset:1}}>
              <p className="stock pt-5">In Stock</p>
              </Col>
              <Row>
                  <Col md={{offset:1}}>
                  <p className="price">$190.82</p>
                  <Row className="">
                      <Col md={{span:1}}>
                      <p className="add">Add to cart</p>
                      </Col>
                      <Col className="" md={{offset:6}}>
              <IoIosTrash fontSize={35} className="del-icon"/>
              </Col>
                  </Row>
                  </Col>
              </Row>
              
          </Row>
      </td>
      
    </tr>

    
  </tbody>
  
</Table> 

<Row className="cs-btn2">
    <Col md={{offset:4}}>
    <Button variant="" className="continue-btn mb-3 mt-5">Continue Shopping</Button>
    </Col>
</Row>
{/* <!---------------------> */}




{/* <Row>
    <Col md={{offset:5}}>
    <Button variant="" className="continue-btn mb-3 mt-5">Continue Shopping</Button>
    </Col>
</Row> */}
                
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

export default ProdList;