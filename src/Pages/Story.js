import "../Styles/Story.css";
import "../Styles/Home.css";
import { Col, Container, Row, NavDropdown, Navbar, Nav, Button, Carousel } from "react-bootstrap";
import { BsPerson, BsTwitter, BsInstagram } from "react-icons/bs";
import { FaShoppingBag, FaFacebookF, FaPinterestP } from "react-icons/fa";
import stbg from "../Images/Group 137.png";
import storyim from "../Images/sthero.png";
import m from "../Images/mission.png";
import back from "../Images/stbg.png";
import quaim from "../Images/stquality.png";
import beek from "../Images/hans.png";
import vers from "../Images/erro.png";
import ad from "../Images/Rectangle.png";
import adim from "../Images/ad.png";
import cir from "../Images/Mask Group (10).png";
import footer from "../Images/Rectangle 41.png";
import el from "../Images/Ellipse 89.png";


function Story() {
  return (
    <>
      <Container fluid className="cont1">
        <img src={stbg} alt="" className="story_bg" />

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

        <Row className="sth-rw">
          <Col className="sth-col1">
            <p className="sth-h">Our Story</p>
            <p className="sth-s">We strive for a natural approach. This approach is reflected in the <br />
              type of vitamin and mineral we offer – quality and quantity together </p>
            <p className="sth-s sth-s1">producing an optimal combination, where the ease of absorption for <br />
              the body is our starting point.</p>
            <Button variant="" className="sth-btn">Buy Now</Button>
          </Col>
          <Col className="sth-col2">
            <img src={storyim} alt="" className="storh-img" />
          </Col>
        </Row>
      </Container>

      <Container className="mis-amb">
        <Row>
          <Col className="mis-col1">
            <p className="m-h">Our Mission</p>
            <p className="m-s">Our aim is to help you live a healthy life.</p>
            <p className="m-s2">We believe health begins within the cell. Our cells need nutrients <br />
              and minerals to have sufficient energy to do the job that they were <br />
              designed to do. Without optimal cellular function, the foundation of <br />
              your health is weakened.
              <br />
              <br />
              Basal Basics focuses on providing you with the essential nutrients <br />
              and minerals that our modern food and lifestyle fail to provide.
              <br />
              <br />
              With a strong foundation, you can build a healthy body.
            </p>
          </Col>
          <Col>
            <img src={m} alt="" className="m-img" />
          </Col>
        </Row>

        <Row className="text-center amb">
          <Col>
            <p className="amb-h">Ambition</p>
            <p className="amb-s">It is our ambition to provide clarity in the somewhat confusing world of dietary supplements. In Dutch there is an old saying: <br />
              “Too many trees causes one to lose sight of the forest.” We find this saying to be quite fitting, but we wish to change that. <br />
              We believe consumers should be able to make the best decisions for their own health. Our dietary supplements play an <br />
              important role in this, a healthy lifestyle too is important.</p>
          </Col>
        </Row>
      </Container>

      <Container fluid className="backg">
        <Row className="backg-rw">
          <Col className="back-col1">
            <img src={back} alt="" className="back-img" />
          </Col>
          <Col className="back-col2">
            <p className="back-h">Background</p>
            <p className="back-s">Basal Basics is a young dietary supplement company that produces <br />
              high quality and targeted products.
              <br /><br />
              We strive for a natural approach. This approach is reflected in the <br />
              type of vitamin and mineral we offer – quality and quantity together <br />
              producing an optimal combination, where the ease of absorption for <br />
              the body is our starting point.
              <br /><br />
              Basal Basics is an independent company and holds no ties or links <br />
              to any other parties.</p>
          </Col>
        </Row>
      </Container>

      <Container className="quality">
        <Row className="text-center">
          <Col>
            <p className="q-h">Quality</p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <p className="q-s">Basal Basics cares about the quality of its products. During product development we choose only the highest quality raw <br />
              materials and where possible, choose organically sourced products.</p>
          </Col>
        </Row>
        <Row>
          <Col className="q-im-col">
            <img src={quaim} alt="" className="q-img" />
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <p className="q-s">By solely working with EU certified manufacturers, we benefit from a network of authorities which consistently monitor the <br />
              quality of our products.
              <br /><br />
              <span style={{ color: "#702283", fontSize: "22px", fontWeight: "500" }} className="haccp">Basal Basics follows the HACCP requirements (Hazard Analysis & Critical Control Points).</span>
            </p>
          </Col>
        </Row>
      </Container>


      <Container fluid className="behind">
        <Row>
          <Col>
            <p className="b-h">The people behind Basal Basics</p>
            <p className="b-s">Basal Basics was founded in 2018 by 3 colleagues who shared a passion for health, science and <br />
              nutrition.</p>
          </Col>
        </Row>
        <Row className="b-img-rw">
          <Col>
            <img src={beek} alt="" className="b-img1" />
            <p className="b-img-t">Hans Beekmans </p>
          </Col>
          <Col>
            <img src={vers} alt="" className="b-img2" />
            <p className="b-img-t">Erro Verschoor</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="b-img-desc" style={{ paddingTop: "6%" }}><b>Hans Beekmans –</b> with 35 years experience practicing dentistry, Hans is considered by many to be one of the top <br />
              practitioners in the dentistry field. Hans has spent the last 10 years researching the relationship of nutrients and dental health. <br />
              The supplements that Basal Basics provides are based on these findings. As a dentist, Hans practices state of the art organic <br />
              treatments combined with advice on general health</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="b-img-desc" style={{ paddingTop: "2%" }}><b>Erro Verschoor –</b> in the 25 years he has been active in the media (television and internet) world, the scientific projects and <br />
              documentaries for National Geographic Channel were amongst his favorite undertakings. Erro’s specialism is being able to <br />
              make complex scientific and medical content fun and easily comprehensible. Erro and Hans have been friends for many <br />
              years, their common interest in the science behind the world of supplements and nutrition bonding them.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="b-img-desc" style={{ paddingTop: "2%" }}><b>Dick den Hartog –</b> has spent several years learning about dietary supplements. His passion and knowledge have drawn him <br />
              to the modern philosophy which Basal Basic’s has grown from.</p>
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

export default Story;