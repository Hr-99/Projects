import "../Styles/Subscribe.css";
import "../Styles/Home.css";
import { Col, Container, Row, NavDropdown, Navbar, Nav, Button, Carousel } from "react-bootstrap";
import { BsPerson, BsTwitter, BsInstagram } from "react-icons/bs";
import { FaShoppingBag, FaFacebookF, FaPinterestP } from "react-icons/fa";
import subbg from "../Images/Rectangle 347.png";
import subi1 from "../Images/4 5.png";
import subi2 from "../Images/3 4.png";
import subi3 from "../Images/1 84.png";
import sb1 from "../Images/Vector (8).png";
import sb2 from "../Images/Vector (9).png";
import sb3 from "../Images/Vector (10).png";
import sben1 from "../Images/Rectangle 16.png";
import sben2 from "../Images/Rectangle 17.png";
import ad from "../Images/Rectangle.png";
import adim from "../Images/ad.png";
import cir from "../Images/Mask Group (10).png";
import footer from "../Images/Rectangle 41.png";
import el from "../Images/Ellipse 89.png";


function Subscribe() {
  return (
    <>
      <Container fluid className="cont1">
        <img src={subbg} alt="" className="sub_bg" />

        <Navbar collapseOnSelect expand="lg" variant="dark" className="navigate">
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

        <Row className="sub-rw1">
          <Col className="sub-col1">
            <p className="sub-h">Never Pay Full Price <br />
              Again</p>
            <p className="sub-s">With the U Save Club you will automatically save <br />
              15% on all subscription purchases!</p>
            <br />
            <br />
            <Button variant="" className="sub-btn">Buy Now</Button>
          </Col>
          <Col className="sub-col2">
            <img src={subi1} alt="" className="sub-i1" />
            <img src={subi2} alt="" className="sub-i2" />
            <img src={subi3} alt="" className="sub-i3" />
          </Col>
        </Row>
        <Row className="text-center sub-ben-rw">
          <Col>
            <p className="sub-ben-h">Subscriber Benefits</p>
          </Col>
          <Row>
            <Col>
              <p className="sub-ben-s">At Basal Basics, we're always trying to make your shopping experience better. Subscribing to your <br />
                favorite products through our U Save Club saves you more.</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <br />
              <br />
              <Button variant="" className="sub-ben-btn">Subscribe Now</Button>
            </Col>
          </Row>
        </Row>

        <Row className="benefits-rw">
          <Col className="">
            <div className="sub-ben">
              <img src={sb1} alt="" className="ben-i1" />
            </div><br />
            <p className="benefit-h">15% Off Every Order</p>
            <p className="benefit-s">With the U Save Club, get at <br />
              least 15% off every order as long <br />
              as you're a member.</p>
          </Col>
          <Col>
            <div className="sub-ben">
              <img src={sb2} alt="" className="ben-i2" />
            </div><br />
            <p className="benefit-h">Guaranteed Delivery</p>
            <p className="benefit-s">You’ll automatically receive your <br />
              order around the same time <br />
              every month.</p>
          </Col>
          <Col>
            <div className="sub-ben">
              <img src={sb3} alt="" className="ben-i3" />
            </div><br />
            <p className="benefit-h">Prompt VIP Support</p>
            <p className="benefit-s">Prompt and personal help <br />
              available 24/7 for your <br />
              subscription or products.</p>
          </Col>
        </Row>


        <Row className="sben-rw">
          <Col className="sben-col1">
            <img src={sben1} alt="" className="sben-i1" />
            <div className="bens-col1">
              <p className="sben-h">Get 15% off Every <br />
                Order</p>
              <p className="sben-s">Simply purchase any subscription or member priced item and <br />
                the time between orders. That's it. You're in! And that's why <br />
                we recommend subscribing to your favorite products through <br />
                our U Save Club.</p>
            </div>
          </Col>
          <Col>
            <img src={sben2} alt="" className="sben-i2" />
            <div className="bens-col2">
              <p className="sben-h">FULL Control Over <br />
                Your Subscription</p>
              <p className="sben-s">Easily pause, start or cancel it at any time - all online. All <br />
                orders shipped out the same time every month - or on the <br />
                schedule you decide, so you don't ever need to worry about <br />
                reordering or running out (and you'll always be guaranteed <br />
                your monthly supply).</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="sub-manage">
        <Row className="text-center">
          <Col>
            <p className="manage-h">How to Manage Your Subscription</p>
          </Col>
        </Row>
        <Row className="manage-srw">
          <Col>
            <p className="manage-n1">1</p>
            <p className="manage-one">Login to your account, then click "Subscriptions"</p>
            <p className="manage-t">Login to your account. After you login, you'll see the Subscriptions tab at <br />
              the top of the page, select here to view active subscriptions.</p>
          </Col>
        </Row>
        <Row className="manage-srw">
          <Col>
            <p className="manage-n2">2</p>
            <p className="manage-one">Select Edit, Skip or Swap</p>
            <p className="manage-t">Selecting "Edit" will take you to the subscription page where you can change the <br />
              frequency, next charge date or address with ease. Skipping will skip the order and <br />
              swapping will allow you to choose another product</p>
          </Col>
        </Row>
        <Row className="manage-srw">
          <Col>
            <p className="manage-n3">3</p>
            <p className="manage-one">Edit products, shipment frequency, pause or cancel <br />
              subscriptions.</p>
            <p className="manage-t">From the "Edit" page is where you can make any changes at any time. If you need <br />
              help with anything or have any questions, we're always available to help.</p>
          </Col>
        </Row>
      </Container>

      <Container fluid className="cont-f">
        <img src={ad} alt="" className="ad-img" />
        <Row>
          <Col>
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

export default Subscribe;