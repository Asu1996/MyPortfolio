import React from 'react'

import classes from './Skills.module.css';

import { MDBIcon } from "mdbreact";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Logo from './Logo'
import AccPage from './AccPage'

import python from '../../assets/logos/icons8-python-50.png'
import arduino from '../../assets/logos/icons8-arduino-50.png'
import java from '../../assets/logos/icons8-java-50.png'
import cpp from '../../assets/logos/icons8-c++-50.png'
import c from '../../assets/logos/icons8-c-programming-50.png'

import django from '../../assets/logos/icons8-django-50.png'
import html from '../../assets/logos/icons8-html-5-50.png'
import css3 from '../../assets/logos/icons8-css3-50.png'
import react from '../../assets/logos/icons8-react-native-50.png'
import redux from '../../assets/logos/icons8-redux-50.png'

import arduinob from '../../assets/logos/icons8-arduino-uno-board-50.png'
import raspi from '../../assets/logos/icons8-raspberry-pi-50.png'
import esp from '../../assets/logos/esp8266.png'

const Skills = () => {
    return(
        
        <div>
            <div className={classes.customAccordion} style={{height:'500px', marginTop:'100px'}}>
    
                <AccPage title='Programming Languages'>
                    <Container>
                        <Row>
                            <Col>
                                <Logo image={python} name='Python'/>
                            </Col>
                            <Col>
                                <Logo image={java} name='Java'/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Logo image={cpp} name='C++'/>
                            </Col>
                            <Col>
                                <Logo image={c} name='C'/>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Logo image={arduino} name='Arduino'/>
                            </Col>
                            <Col>
                                
                            </Col>
                        </Row>

                    </Container>
                </AccPage>

                <AccPage title='Development'>
                    <Row>
                        <Col>
                            <Logo image={html} name='HTML5'/>
                        </Col>
                        <Col>
                            <Logo image={css3} name='CSS3'/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Logo image={django} name='Django'/>
                        </Col>
                        <Col>
                            <Logo image={react} name='react'/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Logo image={redux} name='redux'/>
                        </Col>
                        <Col>
                            
                        </Col>
                    </Row>
                </AccPage>

                <AccPage title='Hardware Programming'>
                    <Row>
                        <Col>
                            <Logo image={arduinob} name='Arduino'/>
                        </Col>
                        <Col>
                            <Logo image={raspi} name='Raspberry Pi 3'/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Logo image={esp} name='ESP 8266' />
                        </Col>
                        <Col>
                            
                        </Col>
                    </Row>
                </AccPage>

                <AccPage title='Tools'>
                    <Logo image=''/>
                </AccPage>

                <div className={classes.item}>
                    <div className={classes.title}>
                    </div>
                    <div className={classes.content} style={{fontSize:'60px'}}>
                        Skills
                        <br />
                        <MDBIcon style={{marginTop:'50px'}} size='1x' icon="hand-point-left" />
                    </div>
                </div>
    
            </div>
        </div>
    )
}

export default Skills;