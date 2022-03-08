import React, { useState } from "react";
import { Container, Navbar, Nav, Row, Col, Button } from "react-bootstrap";
import { BsPerson, BsDot, BsTwitter, BsInstagram } from "react-icons/bs";
import { FaShoppingBag, FaCalendarAlt, FaFacebookF, FaPinterestP } from "react-icons/fa";
import "../Styles/Home.css";
import "../Styles/Product1.css";
import prod3 from "../Images/Group 144.png";
import el100 from "../Images/Ellipse 100.png";
import g77 from "../Images/Group 177.png";
import g78 from "../Images/Group 178.png";
import g79 from "../Images/Group 179.png";
import g80 from "../Images/Group 180.png";
import g81 from "../Images/Group 181.png";
import g82 from "../Images/Group 182.png";
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


function Product1() {

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


        <Row className="head-rw">
          <Col className="prod1-col1">
            <div className="img-bg">
              <img src={prod3} alt="" className="product3-img" />
            </div>
          </Col>
          <Col className="prod1-col2">
            <p className="p-name">Basic-C-Organic</p>
            <p className="p-contain">180 capsules</p>
            <p className="p-desc">All natural, complete and efficient vitamin C supplement <br />
              made up of 2 high quality and organic ingredients, <br />
              camu camu and acerola.</p>
            <p className="p-high">100% organic, vegetable and natural form of vitamin C</p>
            <div className="wrap-btn">
              <span><input type="radio" name="otp" id="purchase" className="r-btn" />
                <p className="r-name">One-Time Purchase</p></span>


              <br />
              <p className="r-btn-price">$44.95</p>
            </div>
            <br />
            <span className="sel-s">
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
          <Col className="ben-col">
            <img src={el100} alt="" />
            <img src={g77} alt="" className="ben-img1" />
            <p className="ben-col-text">Vitamin C activates the body’s <br />
              natural energy and supports a <br />
              strong immune system.</p>
          </Col>
          <Col className="ben-col">
            <img src={el100} alt="" />
            <img src={g78} alt="" className="ben-img2" />
            <p className="ben-col-text">Vitamin C is an antioxidant, therefore it <br />
              protects the body’s cells and tissues <br />
              against free radicals.</p>
          </Col>
          <Col className="ben-col">
            <img src={el100} alt="" />
            <img src={g79} alt="" className="ben-img3" />
            <p className="ben-col-text">Vitamin C is crucial for healthy teeth and <br />
              gums. It aids in the formation of collagen <br />
              which also supports healthy gums.</p>
          </Col>
        </Row>
        <Row className="benef-rw">
          <Col className="ben-col">
            <img src={el100} alt="" />
            <img src={g80} alt="" className="ben-img4" />
            <p className="ben-col-text ben-col-text4">Vitamin C helps reduce fatigue.</p>
          </Col>
          <Col className="ben-col">
            <img src={el100} alt="" />
            <img src={g81} alt="" className="ben-img5" />
            <p className="ben-col-text">Vitamin C supports optimal functioning <br />
              of the memory and overall mental well- <br />
              being.</p>
          </Col>
          <Col className="ben-col">
            <img src={el100} alt="" />
            <img src={g82} alt="" className="ben-img6" />
            <p className="ben-col-text ben-col-text6">Vitamine C is important for the absorption <br />
              of iron.</p>
          </Col>
        </Row>
      </Container>

      <Container className="ingredient-desc-rw">
        <Row className="text-center prod1-ingred-rw">
          <Col>
            <p className="descr-h">Basic-C-Organic</p>
          </Col>
        </Row>
        <Row className="text-center prod1-ingred-rw">
          <Col>
            <p className="descr-s">An all-natural, rich vitamin C supplement made from high-quality  organic ingredients such as Camu Camu <br />
              (20-30x more vitamin C than kiwi) </p>
          </Col>
        </Row>
        <Row className="text-center ingredi-rw">
          <Col>

            <a className="i1" onClick={()=>ChangeAttribute('pr1')}>
              <img src={ing1} alt="" className="ing1" />
              <p className="ing1-t">Camu camu </p>
            </a>

          </Col>
          <Col>

            <a className="i1" onClick={()=>ChangeAttribute('pr2')}>
              <img src={ing2} alt="" className="ing2" /> <br /><br /><br />
              <p className="ing2-t">Acerola</p>
            </a>

          </Col>
        </Row>
        <Row id="pr1" className="ing-info d-none">
          <Col className="info-col1">


            <p className="info-h">Camu camu: </p>


            <p className="info-s">Camu Camu is a red-purple berry from the Amazon region and is also a rich <br />
              source of natural vitamin C. Camu camu contains 20 to 30 times more vitamin <br />
              C than a kiwi.</p>

            <Button variant="" className="info-btn">Read More</Button>
          </Col>
          <Col className="info-col2">
            <img src={ing11} alt="" className="info-img" />
          </Col>
        </Row>
        <Row id="pr2" className="ing-info d-none">
          <Col className="info-col1">


            <p className="info-h">Acerola: </p>


            <p className="info-s">Camu Camu is a red-purple berry from the Amazon region and is also a rich <br />
              source of natural vitamin C. Camu camu contains 20 to 30 times more vitamin <br />
              C than a kiwi.</p>

            <Button variant="" className="info-btn">Read More</Button>
          </Col>
          <Col className="info-col2">
            <img src={ing11} alt="" className="info-img" />
          </Col>
        </Row>
      </Container>
      <Container fluid className="product-use-rw">
        <Row className="use-rw">
          <Col className="use-col1">
            <img src={prod3} alt="" className="use-pro" />
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

export default Product1;