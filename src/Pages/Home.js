import React from "react";
import { Col, Container, Row, NavDropdown, Navbar, Nav, Button, Carousel } from "react-bootstrap";
import {Link} from "react-router-dom";
import "../Styles/Home.css";
import { BsPerson, BsTwitter, BsInstagram } from "react-icons/bs";
import { FaShoppingBag, FaFacebookF, FaPinterestP } from "react-icons/fa";
import home from "../Images/Frame 1.png";
import home2 from "../Images/dna_img.png";
import pro from "../Images/Group 149.png";
import el from "../Images/Ellipse 89.png";
import c2 from "../Images/Frame.png";
import c1 from "../Images/Group 123.png";
import c3 from "../Images/Group 238.png";
import prod1 from "../Images/Group_142.png";
import prod2 from "../Images/Group 143.png";
import prod3 from "../Images/Group 144.png";
import reviewbg from "../Images/Group 213.png";
import i1 from "../Images/Mask Group (1).png";
import i2 from "../Images/Mask Group (2).png";
import i3 from "../Images/Mask Group (3).png";
import i4 from "../Images/Mask Group (4).png";
import i5 from "../Images/Mask Group (5).png";
import i6 from "../Images/Mask Group (6).png";
import i7 from "../Images/Mask Group (7).png";
import i8 from "../Images/Mask Group (8).png";
import inbg from "../Images/Group 206.png";
import st from "../Images/Homepage_story.png";
import process1 from "../Images/Group 125.png";
import process2 from "../Images/Group 229.png";
import process3 from "../Images/Group 127.png";
import ss from "../Images/shutterstock.png";
import ssbg from "../Images/Rectangle 465.png";
import ssbg1 from "../Images/Rectangle 466.png";
import ad from "../Images/Rectangle.png";
import adim from "../Images/ad.png";
import cir from "../Images/Mask Group (10).png";
import footer from "../Images/Rectangle 41.png";
import el7 from "../Images/Ellipse 7.png";








function Home() {
  return (
    <>
      <Container fluid className="cont1">
        <img src={home} alt="" className="home_bg" />
        <img src={home2} alt="" className="hi2" />
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

        <Row className="rw">
          <Col className="cl-1">
            <p className="hero-t">Health starts in <br /> your cells</p>
            <p className="hero-sub">The highest quality vitamins and <br /> minerals to support your health <br /> <br />
              A dietary supplement is not a substitute for <br /> a varied, balanced diet and a healthy <br /> lifestyle. </p>
            <Button variant="" className="hero-btn">Buy Now</Button>
          </Col>
          <Col className="cl-2">
            <img src={pro} alt="" className="pro_img" />
          </Col>
        </Row>


        <Row className="text-center pro-det-rw">
          <Col>
            <p className="det-t">Basal Basics cares about the <br /> quality of its products.</p>
          </Col>
        </Row>
        <Row className="prod-rw">
          <Col className="pro-coll">
            <img src={el} alt="" className="c1-e" />
            <img src={c2} alt="" className="c1-i" />
            <p className="c1-t">Free from soy, gluten, wheat <br /> and lactose.</p>
          </Col>
          <Col className="pro-coll">
            <img src={el} alt="" className="c2-e" />
            <img src={c1} alt="" className="c2-i" />
            <p className="c2-t">No added sugars, preservatives, <br /> or artificial colors.</p>
          </Col>
          <Col className="pro-coll">
            <img src={el} alt="" className="c3-e" />
            <img src={c3} alt="" className="c3-i" />
            <p className="c3-t">Contains only the highest quality <br /> of ingredients.</p>
          </Col>
        </Row>
      </Container>

      <Container fluid className="cont-pros">
        <Row className="text-center">
          <Col>
            <p className="pros-t">OUR PRODUCTS</p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <p className="pros-s">Unique formulas designed to <br /> compliment each other.</p>
          </Col>
        </Row>
        <Row className="product-rw">
          <Col className="product1">
            <img src={prod1} alt="" className="prod1-img" />
            <p className="prod1-t">Fundamental Minerals</p>
            <p className="prod1-s">A balance of vitamins and <br /> minerals (such as iron, iodine, <br /> copper, zinc) to optimally support <br /> your healthy lifestyle.</p> <br />
            <Button variant="" className="prod1-btn">Add To Bag  <span className="prod1-p">€49.95</span></Button>
          </Col>
          <Col className="product1">
            <img src={prod2} alt="" className="prod2-img" />
            <p className="prod2-t">Basic-Oils</p>
            <p className="prod2-s">Deze 'gouden pil' is in vele opzichten <br /> uniek. De basisoliën bevatten natuurlijke <br /> en duurzame wilde Krill olie, vitamine E, <br /> en Ubiquinol</p> <br />
            <Button variant="" className="prod2-btn">Add To Bag  <span className="prod2-p">€83.50</span></Button>
          </Col>
          <Col className="product1">
            <img src={prod3} alt="" className="prod3-img" />
            <p className="prod3-t">Basic-C-Organic</p>
            <p className="prod3-s">This 'golden pill' is unique in many ways. <br /> The base oils contain natural and <br /> sustainable wild Krill oil, Vitamin E, and <br /> Ubiquinol.</p> <br />
            <Button variant="" className="prod3-btn">Add To Bag  <span className="prod3-p">€44.95</span></Button>
          </Col>
        </Row>

        <Carousel className="products-carou" variant="dark">
          <Carousel.Item>
            <img src={prod1} alt="" className="prod1-img" />
            <p className="prod1-t">Fundamental Minerals</p>
            <p className="prod1-s">A balance of vitamins and <br /> minerals (such as iron, iodine, <br /> copper, zinc) to optimally support <br /> your healthy lifestyle.</p> <br />
            <Button variant="" className="prod1-btn">Add To Bag  <span className="prod1-p">€49.95</span></Button>
          </Carousel.Item>
          <Carousel.Item>
            <img src={prod2} alt="" className="prod2-img" />
            <p className="prod2-t">Basic-Oils</p>
            <p className="prod2-s">Deze 'gouden pil' is in vele opzichten <br /> uniek. De basisoliën bevatten natuurlijke <br /> en duurzame wilde Krill olie, vitamine E, <br /> en Ubiquinol</p> <br />
            <Button variant="" className="prod2-btn">Add To Bag  <span className="prod2-p">€83.50</span></Button>
          </Carousel.Item>
          <Carousel.Item>
            <img src={prod3} alt="" className="prod3-img" />
            <p className="prod3-t">Basic-C-Organic</p>
            <p className="prod3-s">This 'golden pill' is unique in many ways. <br /> The base oils contain natural and <br /> sustainable wild Krill oil, Vitamin E, and <br /> Ubiquinol.</p> <br />
            <Button variant="" className="prod3-btn">Add To Bag  <span className="prod3-p">€44.95</span></Button>
          </Carousel.Item>
        </Carousel>









        <Row className="text-center rev-bg">
          <Col className="rev-text">
            <p>350</p>
            <p>Products Sold</p>
          </Col>
          <Col className="rev-text">
            <p>340</p>
            <p>Happy Customers</p>
          </Col>
          <Col className="rev-text">
            <p>99%</p>
            <p>Customer Satisfaction</p>
          </Col>
        </Row>
      </Container>


      <Container fluid className="cont-ingred">
        <Row className="text-center">
          <p className="ingred-t">INGREDIENTS</p>
        </Row>
        <Row className="text-center">
          <p className="ingred-s">Our Ingredients Supports</p>
        </Row><br /><br />
        <Row className="text-center ingredients">
          <Col className="ingred-col">
            <img src={el} alt="" className="ellipse" />
            <img src={i1} alt="" className="ingred-i1" />
            <p className="in-sup">Bones & Teeth</p>
            <p>(Calcium)</p>
            <p className="ingred-des">draagt bij tot de normale collageenvorming <br /> voor de normale werking van het  kraakbeen. <br /> (Basic C)
            </p>
          </Col>
          <Col className="ingred-col">
            <img src={el} alt="" className="ellipse" />
            <img src={i2} alt="" className="ingred-i2" />
            <p className="in-sup">Muscles</p>
            <p>(Magnesium)</p>
            <p className="ingred-des">draagt bij tot de normale collageenvorming <br /> voor de normale werking van het  kraakbeen. <br /> (Basic C)
            </p>
          </Col>
          <Col className="ingred-col">
            <img src={el} alt="" className="ellipse" />
            <img src={i3} alt="" className="ingred-i3" />
            <p className="in-sup">Energy</p>
            <p>(Iron)</p>
            <p className="ingred-des">draagt bij tot de normale collageenvorming <br /> voor de normale werking van het  kraakbeen. <br /> (Basic C)
            </p>
          </Col>
          <Col className="ingred-col">
            <img src={el} alt="" className="ellipse" />
            <img src={i4} alt="" className="ingred-i4" />
            <p className="in-sup">Concentration</p>
            <p>(Iodine)</p>
            <p className="ingred-des">draagt bij tot de normale collageenvorming <br /> voor de normale werking van het  kraakbeen. <br /> (Basic C)
            </p>
          </Col>
        </Row><br /><br /><br /><br />
        <Row className="text-center ingredients1">
          <Col className="ingred-col incl">
            <img src={el} alt="" className="ellipse" />
            <img src={i5} alt="" className="ingred-i5" />
            <p className="in-sup">Copper</p>
            <p>(Cu)</p>
            <p className="ingred-des">draagt bij tot de normale collageenvorming <br /> voor de normale werking van het  kraakbeen. <br /> (Basic C)
            </p>
          </Col>
          <Col className="ingred-col incl">
            <img src={el} alt="" className="ellipse" />
            <img src={i6} alt="" className="ingred-i6" />
            <p className="in-sup">Hormonen</p>
            <p>(Zinc)</p>
            <p className="ingred-des">draagt bij tot de normale collageenvorming <br /> voor de normale werking van het  kraakbeen. <br /> (Basic C)
            </p>
          </Col>
          <Col className="ingred-col incl">
            <img src={el} alt="" className="ellipse" />
            <img src={i7} alt="" className="ingred-i7" />
            <p className="in-sup">Immunity</p>
            <p className="bnt">(Krill Oil)</p>
            <p className="ingred-des">draagt bij tot de normale collageenvorming <br /> voor de normale werking van het  kraakbeen. <br /> (Basic C)
            </p>
          </Col>
          <Col className="ingred-col incl">
            <img src={el} alt="" className="ellipse" />
            <img src={i8} alt="" className="ingred-i8" />
            <p className="in-sup">Memory</p>
            <p>(Vitamin C)</p>
            <p className="ingred-des">draagt bij tot de normale collageenvorming <br /> voor de normale werking van het  kraakbeen. <br /> (Basic C)
            </p>
          </Col>

        </Row>


        <Row className="home-story">
          <img src={inbg} alt="" className="ing-bg" />
          <Col>
            <img src={st} alt="" className="st-img" />
          </Col>
          <Col className="hs-col2">
            <div className="our-st">
              <p className="st-col">OUR STORY</p>
              <p className="st-h">Our goal is to help you <br /> lead a healthy life. </p>
              <p className="st-p1">We believe that health begins at the cellular level. <br /> Our entire body is made up of cells. Every cell <br />
                needs important micronutrients. These <br /> micronutrients enter the body through food. A <br />
                strong base of micronutrients supports good and <br />
                long-lasting health. </p>
              <p className="st-p2">A healthy lifestyle is of course the basis of a <br /> healthy life, but sometimes it is not possible to get <br />
                enough vitamins and minerals. We are ready to <br /> help you with this with our products. </p>
              <Button variant="" className="st-btn">Learn More</Button>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="cont-process">
        <Row className="text-center">
          <Col>
            <p className="p-sec">OUR PROCESS</p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <p className="p-h"> Find out your ideal daily dose</p>
          </Col>
        </Row>
        <Row className="pro-rw">
          <Col className="pro-rw-col">
            <Row className="nest-r1">
              <Col>
                <img src={process1} alt="" className="pro-rw-img" />
                <img src={el} alt="" className="pro-rw-img1 mt-2" />
              </Col>
              <Col>
                <p className="pro-t">Take the quiz</p>
                <p className="pro-s">Not everyone has the same needs when it comes to dosage. <br />
                  Take this simple quiz to find out your ideal daily dose.</p>
              </Col>
            </Row>
            <hr />
            <Row className="nest-r2">
              <Col>
                <img src={process2} alt="" className="pro-rw-img2" />
                <img src={el} alt="" className="pro-rw-img1 mt-2" />
              </Col>
              <Col>
                <p className="pro-t">Take your daily dose</p>
                <p className="pro-s">Every morning and evening swallow the recommended <br /> dosage with a glass of water.</p>
              </Col>
            </Row>
            <hr />
            <Row className="nest-r3">
              <Col>
                <img src={process3} alt="" className="pro-rw-img3" />
                <img src={el} alt="" className="pro-rw-img1 mt-2" />
              </Col>
              <Col>
                <p className="pro-t">Let the vitamins & <br /> minerals do the rest</p>
                <p className="pro-s">The unique formulas of vitamins & minerals will complement <br /> each other and supplement your healthy lifestyle.</p>
              </Col>
              <Row className="text-center">
                <Col>
                  <Button variant="" className="pro-btn">Shop Now</Button>
                </Col>
              </Row>
            </Row>
          </Col>
        </Row>
        <Row className="image-rw">
          <Col className="img-col">
            <img src={ssbg} alt="" className="process-bg" />
            <img src={ssbg1} alt="" className="process-bg1" />
            <img src={ss} alt="" className="process-bgm" />
          </Col>
        </Row> <br /> <br />
        <Carousel variant="dark" className="testimony">

          <Carousel.Item>
            <h3 className="test-h">TESTIMONIALS</h3>
            <br />
            <br />
            <p className="test-p">“Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Ridiculus <br /> blandit vitae volutpat eu turpis.”</p>
            <br />
            <br />
            <h4 className="test-user">[User Name]</h4>
            <p className="test-pro">[Product Name]</p>

          </Carousel.Item>
          <Carousel.Item>
            <h3 className="test-h">TESTIMONIALS</h3>
            <br />
            <br />
            <p className="test-p">“Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Ridiculus <br /> blandit vitae volutpat eu turpis.”</p>
            <br />
            <br />
            <h4 className="test-user">[User Name]</h4>
            <p className="test-pro">[Product Name]</p>


          </Carousel.Item>
          <Carousel.Item>
            <h3 className="test-h">TESTIMONIALS</h3>
            <br />
            <br />
            <p className="test-p">“Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Ridiculus <br /> blandit vitae volutpat eu turpis.”</p>
            <br />
            <br />
            <h4 className="test-user">[User Name]</h4>
            <p className="test-pro">[Product Name]</p>

          </Carousel.Item>
        </Carousel>
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

export default Home;