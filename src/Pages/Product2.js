import React, { useState } from "react";
import { Container, Navbar, Nav, Row, Col, Button } from "react-bootstrap";
import { BsPerson, BsDot, BsTwitter, BsInstagram } from "react-icons/bs";
import { FaShoppingBag, FaCalendarAlt, FaFacebookF, FaPinterestP } from "react-icons/fa";
import "../Styles/Home.css";
import "../Styles/Product1.css";
import "../Styles/Product2.css";
import prod2 from "../Images/Group 143.png";
import el100 from "../Images/Ellipse 100.png";
import g77 from "../Images/Group 177.png";
import g78 from "../Images/Group 178.png";
import g83 from "../Images/Group 183.png";
import g84 from "../Images/Group 184.png";
import g85 from "../Images/Group 185.png";
import g86 from "../Images/Group 186.png";
import g87 from "../Images/g187.png";
import g89 from "../Images/Group 189.png";
import g90 from "../Images/Group 190.png";
import ing1 from "../Images/image 6.png";
import ing2 from "../Images/image 7.png";
import ing11 from "../Images/Rectangle 429.png";
import use from "../Images/dna_img.png";
import ad from "../Images/Rectangle.png";
import adim from "../Images/ad.png";
import cir from "../Images/Mask Group (10).png";
import footer from "../Images/Rectangle 41.png";
import el7 from "../Images/Ellipse 7.png";
import el from "../Images/Ellipse 89.png";
import Accordion from "../Components/Accordion";
import ko from "../Images/1 87.png";
import ve from "../Images/image 8.png";
import ubiq from "../Images/2 22.png";
import rect432 from "../Images/Rectangle 432.png";



function Product2() {

  const ChangeAttribute=(e)=>
  {

console.log(e)

var p1=document.getElementById(e);
p1.classList.toggle("d-none");

  }


  return (
    <>
      <Container className="">

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


        <Row className="head-rw h-rw2">
          <Col>
            <div className="img-bg">
              <img src={prod2} alt="" className="product3-img" />
            </div>
          </Col>
          <Col className="prod2-col2">
            <p className="p-name p2-n">Basic Oils</p>
            <p className="p-contain p2-con">180 capsules</p>
            <p className="p-desc">All natural, complete and efficient vitamin C supplement <br />
              made up of 2 high quality and organic ingredients, <br />
              camu camu and acerola.</p><br /><br />
            {/* <p className="p-high">100% organic, vegetable and natural form of vitamin C</p> */}
            <div className="wrap-btn">
              <span><input type="radio" name="otp" id="purchase" className="r-btn" />
                <p className="r-name">One-Time Purchase</p></span>


              <br />
              <p className="r-btn-price">$44.95</p>
            </div>
            <br />
            <span>
              <div class="select-wrap">
                <label>Quantity</label><br />
                <select name="color">
                  <option value="">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              <Button variant="" className="add-btn">Add To Bag  <p className="btn-text">€44.95</p></Button>
            </span>

            <br />
            <div className="save-d">
              <Row>
                <Col>
                  <p className="p-ss"><BsDot fontSize={30} color="black" /> Subscribe & Save</p>
                </Col>
                <Col>
                  <p className="p-on"><del>$44.95</del> $33.96</p>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col className="col-d">
                  <FaCalendarAlt />
                  <select name="" id="" className="p-do">
                    <option value=""></option>
                    <option value="">Delivery Within 30 days</option>
                  </select>
                </Col>
              </Row>
            </div>

          </Col>
        </Row>
      </Container>

      <Container fluid className="benefit-cont">
        <Row className="text-center">
          <Col>
            <p className="ben-h">Ingredients and benefits</p>
          </Col>
        </Row>
        <Row className="benef-rw">
          <Col className="ben-col ben2-col">
            <img src={el100} alt="" />
            <img src={g83} alt="" className="ben2-img1" />
            <p className="ben-col-text ben2-col-text1">EPA and DHA contribute to the <br />
              normal functioning of the heart</p>
          </Col>
          <Col>
            <img src={el100} alt="" />
            <img src={g84} alt="" className="ben2-img2" />
            <p className="ben-col-text ben2-col-text2">DHA and EPA contribute to the <br />
              maintenance of normal triglyceride <br />
              levels in the blood</p>
          </Col>
          <Col>
            <img src={el100} alt="" />
            <img src={g85} alt="" className="ben2-img3" />
            <p className="ben-col-text ben2-col-text3">DHA contributes to the maintenance <br />
              of normal vision</p>
          </Col>
        </Row>
        <Row className="benef-rw">
          <Col>
            <img src={el100} alt="" />
            <img src={g86} alt="" className="ben2-img4" />
            <p className="ben-col-text ben2-col-text4">DHA is good for brain function</p>
          </Col>
          <Col>
            <img src={el100} alt="" />
            <img src={g87} alt="" className="ben2-img5" />
            <p className="ben-col-text ben2-col-text5">Vitamin E is particularly important <br />
              in protecting cell membranes</p>
          </Col>
          <Col>
            <img src={el100} alt="" />
            <img src={g77} alt="" className="ben2-img6" />
            <p className="ben-col-text ben2-col-text6">Vitamin E helps the (natural) immune <br /> system</p>
          </Col>
        </Row>
        <Row className="benef-rw">
          <Col>
            <img src={el100} alt="" />
            <img src={g78} alt="" className="ben2-img7" />
            <p className="ben-col-text ben2-col-text7">Vitamin E has an anti-oxidative <br />
              effect</p>
          </Col>
          <Col>
            <img src={el100} alt="" />
            <img src={g89} alt="" className="ben2-img8" />
            <p className="ben-col-text ben2-col-text8">Q10 plays a vital role in supporting cells <br />
              and assisting the healthy functioning of <br />
              organs</p>
          </Col>
          <Col>
            <img src={el100} alt="" />
            <img src={g90} alt="" className="ben2-img9" />
            <p className="ben-col-text ben2-col-text9">Choline contributes to the <br /> maintenance of normal liver function</p>
          </Col>
        </Row>
      </Container>

      <Container className="ingredient-desc-rw">
        <Row className="text-center">
          <Col>
            <p className="descr-h">Basic Oils</p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <p className="descr-sub">Natural krill oil from sustainable wild catch, vitamin E and Ubiquinol Q10. </p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <p className="descr-s">This 'golden pill' is unique in many ways. The base oils contain all-natural and sustainable Wild Krill Oil, <br />
              Vitamin E, and Ubiquinol. </p>
          </Col>
        </Row>
        <Row className="text-center ingred2-rw ing2-rw">
          <Col>

            <a className="i1 i2" onClick={()=>ChangeAttribute('prod1')}>
              <img src={ko} alt="" className="ing21" />
              <p className="ing21-t">Krill Oil</p>
            </a>

          </Col>
          <Col>

            <a className="i1 i2" onClick={()=>ChangeAttribute('prod2')}>
              <img src={ve} alt="" className="ing22" /> <br /><br /><br />
              <p className="ing22-t">Vitamin E</p>
            </a>

          </Col>
          <Col>

            <a className="i1 i2" onClick={()=>ChangeAttribute('prod3')}>
              <img src={ubiq} alt="" className="ing23" /> <br /><br /><br />
              <p className="ing23-t">Ubiquinol</p>
            </a>

          </Col>
        </Row>
        <Row id="prod1" className="ing-info d-none">
          <Col className="info-col1">
            <p className="info-h">Krill Oil:</p>
            <p className="info-s">Krill oil is extracted from Euphasia Superba, a krill species that lives <br />
              around the South Pole. These are shrimp-like sea creatures that belong <br />
              to the zooplankton. The krill is obtained in a sustainable and <br />
              environmentally friendly way. This ecologically responsible fishing <br />
              method has no unwanted by-catch of fish or seals. This is done in <br />
              collaboration with the World Wildlife Fund. </p>
            <Button variant="" className="info-btn">Read More</Button>
          </Col>
          <Col className="info-col2">
            <img src={rect432} alt="" className="info2-img" />
          </Col>
        </Row>

        <Row id="prod2" className="ing-info d-none">
          <Col className="info-col1">
            <p className="info-h">Vitamin E:</p>
            <p className="info-s">Krill oil is extracted from Euphasia Superba, a krill species that lives <br />
              around the South Pole. These are shrimp-like sea creatures that belong <br />
              to the zooplankton. The krill is obtained in a sustainable and <br />
              environmentally friendly way. This ecologically responsible fishing <br />
              method has no unwanted by-catch of fish or seals. This is done in <br />
              collaboration with the World Wildlife Fund. </p>
            <Button variant="" className="info-btn">Read More</Button>
          </Col>
          <Col className="info-col2">
            <img src={rect432} alt="" className="info2-img" />
          </Col>
        </Row>

        <Row id="prod3" className="ing-info d-none">
          <Col className="info-col1">
            <p className="info-h">Ubiquinol:</p>
            <p className="info-s">Krill oil is extracted from Euphasia Superba, a krill species that lives <br />
              around the South Pole. These are shrimp-like sea creatures that belong <br />
              to the zooplankton. The krill is obtained in a sustainable and <br />
              environmentally friendly way. This ecologically responsible fishing <br />
              method has no unwanted by-catch of fish or seals. This is done in <br />
              collaboration with the World Wildlife Fund. </p>
            <Button variant="" className="info-btn">Read More</Button>
          </Col>
          <Col className="info-col2">
            <img src={rect432} alt="" className="info2-img" />
          </Col>
        </Row>
      </Container>
      <Container fluid className="product-use-rw">
        <Row className="use-rw">
          <Col className="use-col1">
            <img src={prod2} alt="" className="use-pro" />
          </Col>
          <Col className="use-col2">
            <img src={use} alt="" className="use-im" />
            <p className="use-h">How To Use </p>
            <p className="use1">1</p>
            <p className="use1-t at1">Take your recommended daily dose <br />
              <p>Basic-c-Organiccan be taken daily, any time <br />
                throughout the day</p> </p>
            <div className="use2-p">
              <p className="use2">2</p>
              <p className="use2-t at">Pair with food and water <br />
                <p>For best results take (name of product) with a meal <br /> and water</p></p>
            </div>
            <p className="use3">3</p>
            <p className="use3-t at">Let the (Basic-c-Organic) do the rest <br />
              <p>The unique formulas will complement each other <br />
                and supplement your healthy lifestyle.</p></p>
          </Col>

        </Row>
      </Container>
      {/* <Container className="faq-cont">
          <Row className="text-center">
            <Col>
            <p className="faq-h">Frequently Asked Questions</p>
            </Col>
          </Row>
                 <Accordion/>
          
        </Container> */}

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

export default Product2;