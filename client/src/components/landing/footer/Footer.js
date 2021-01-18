import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook, faGooglePlus} from '@fortawesome/free-brands-svg-icons'
import {Link} from 'react-scroll'

import StudentModal from '../modal/StudentModal'
import SrcModal from '../modal/SrcModal'

const Footer = () => {
    return (
        <div id="footer">
  <div className="footer-top" style={{padding:"40px", marginTop: "20px" }}>
           <Row>
               <Col lg={4} md={6} className="footer-info">
               <h3>The African University College of Communications</h3>
                <p>
                The African University College of Communications (AUCC), formerly known as the Africa Institute of Journalism and Communications (AIJC), is a private tertiary institution established in 2002 by Hon. Kojo Yankah. Honourable Yankah, the first President of AUCC, was former Editor of Daily Graphic, Ghana's widest circulation newspaper; nine years Director of the Ghana Institute of Journalism, seven years Minister of State, and eight years as Member of Parliament AIJC admitted the first batch of Diploma students for its Communication Studies programme in 2002, and was formally accredited as a tertiary institution by the National Accreditation Board (NAB) in 2004.
                </p>
               </Col>

               <Col lg={2} md={6} className="footer-links">
               <h4>Useful Links</h4>
                <ul>
                    {/* <li><a href="#homecarousel">Home</a></li>
                    <li><a href="#aboutus">About</a></li>
                    <li><a href="#news">News</a></li>
                    <li> <a href="#myModal" data-toggle="modal">Student Login</a></li>
                    <li><a href="#myModal2"  data-toggle="modal">SRC Login</a></li> */}
    <li><Link activeClass="active" spy={true} smooth={true} offset={-70} duration={500} to="header" activeClassName="selected">Home</Link></li> 
      <li><Link activeClass="active" spy={true} smooth={true} offset={-70} duration={500} to="gallery" activeClassName="selected">Gallery</Link></li>
      <li><Link activeClass="active" spy={true} smooth={true} offset={-70} duration={500} to="about" activeClassName="selected">About</Link></li>
      <li><Link activeClass="active" spy={true} smooth={true} offset={-70} duration={500} to="news" activeClassName="selected">News</Link></li>
      <li><Link activeClass="active" spy={true} smooth={true} offset={-70} duration={500} to="footer" activeClassName="selected">Contact</Link></li>
      <li style={{color: 'white'}}><Link><StudentModal/></Link></li>
      <li style={{color: 'white'}}><Link><SrcModal/></Link></li>
                </ul>
               </Col>

               <Col lg={3} md={6}>
               <h4>Contact Us</h4>
               <p><strong>Location: </strong> Discovery House,No.2 Jones Nelson Link, Off Kojo Thompson Road. Adabraka, Accra, Ghana.</p>
               <p><strong>Phone: </strong> +233 302 258 586</p>
               <p><strong>Email: </strong> info@aucc.edu.gh</p>
               <div className="social-links">
    <a href="https://twitter.com/auccghana?s=20" class="twitter"><FontAwesomeIcon icon={faTwitter}/></a>
    <a href="https://web.facebook.com/auccafrica?_rdc=1&_rdr" class="facebook"><FontAwesomeIcon icon={faFacebook}/></a>
    <a href="https://www.instagram.com/auccghana/?hl=en" class="instagram"><FontAwesomeIcon icon={faInstagram}/></a>
    <a href="info@aucc.edu.gh" class="gmail"><FontAwesomeIcon icon={faGooglePlus}/></a>
</div>
               </Col>


<Col lg={3} md={6} className="footer-newsletter">
<h4>Mission and Vision</h4>
                <p> The mission of AUCC as a higher educational institution is to prepare lifelong learners to become innovative problem-solvers and ethical leaders through excellence in inter-disciplinary teaching, research, and collaboration using a Pan-African framework.

Our vision is to become a centre of excellence in communication, business and related areas by providing opportunities for student learning, research, professional and economic development for the progress of the continent of Africa and the global community.</p>
</Col>
           </Row>

            <Container className="text-center">
     <div className="copyright">
         &copy; Copyright <strong>AUCC SRC Management Platform</strong>.All Rights Reserved </div>
         <div className="credits">
             Designed by <a href="https://innocentanyaele.github.io/innocent/">InnocentAnyaele</a>
         </div></Container>
       </div>
        </div>
     
    )
}

export default Footer