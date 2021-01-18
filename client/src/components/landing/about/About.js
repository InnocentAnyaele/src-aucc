import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'


const About = () => {
    return (
        <Container className="text-center" id="about">
            <h1 style={{padding: "40px" }} >About AUCC</h1>
            <Row>

            <Col className="text-justify" lg={6} md={6}>
            <p> The African University College of Communications (AUCC), formerly known as the Africa Institute of Journalism and Communications (AIJC), is a private tertiary institution established in 2002 by Hon. Kojo Yankah. Honourable Yankah, the first President of AUCC, was former Editor of Daily Graphic, Ghana's widest circulation newspaper; nine years Director of the Ghana Institute of Journalism, seven years Minister of State, and eight years as Member of Parliament AIJC admitted the first batch of Diploma students for its Communication Studies programme in 2002, and was formally accredited as a tertiary institution by the National Accreditation Board (NAB) in 2004.</p>
            </Col>

            <Col className="text-justify" lg={6} md={6}>
            <p> The mission of AUCC as a higher educational institution is to prepare lifelong learners to become innovative problem-solvers and ethical leaders through excellence in inter-disciplinary teaching, research, and collaboration using a Pan-African framework.

Our vision is to become a centre of excellence in communication, business and related areas by providing opportunities for student learning, research, professional and economic development for the progress of the continent of Africa and the global community.</p>
            </Col>

            </Row>
        </Container>
    )
}

export default About