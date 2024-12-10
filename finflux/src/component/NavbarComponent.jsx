import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AiOutlineUser, AiFillHome, AiOutlinePaperClip, AiOutlineSlack, AiFillControl, AiOutlineAlert } from "react-icons/ai";
import Image from 'react-bootstrap/Image';
import logo from '../assets/Finflux_logo.png';




function NavScrollExample() {
  return (
    <>
      {/*first navbar with searchbox */}
      <div className='container-fluid'>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand 
            href="#" style={{
              color: '#2a9d8f', // A professional green tone symbolizing growth and finance
              fontWeight: 'bold',
              fontSize: '1.5rem',
              fontFamily: 'Arial, sans-serif',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' // Subtle shadow for depth
            }}>
              Empowering Real-Time Market Insights
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      </div>

      {/*second navbar with logo */}
      <div className='col-md-3'>
        <Image src={logo} alt="no_Logo" width="150" height="150" />
      </div>


      {/*third navbar with links*/}
      <div className="Container-fluid ">
        <Navbar expand="lg" className="bg-body ">
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll ">
            <Nav
              className="d-flex justify-content-between container"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">
                Home
                <span className='ms-2'>
                  <AiFillHome />
                </span>
              </Nav.Link>

              <Nav.Link href="#action1">
                News
                <span className='ms-2'>
                  <AiOutlinePaperClip />
                </span>
              </Nav.Link>

              <Nav.Link href="#action1">
                Portfolio
                <span className='ms-2'>
                  <AiOutlineSlack />
                </span>
              </Nav.Link>

              <Nav.Link href="#action1">
                ALL STAT
                <span className='ms-2'>
                  <AiFillControl />
                </span>
              </Nav.Link>

              <Nav.Link href="#action1">
                Alert
                <span className='ms-2'>
                  <AiOutlineAlert />
                </span>
              </Nav.Link>

              <Nav.Link href="#action2">
                Account
                <span className='ms-2'>
                  <AiOutlineUser />
                </span>
              </Nav.Link>



            </Nav>

          </Navbar.Collapse>

        </Navbar>
      </div>


    </>

  );
}

export default NavScrollExample;