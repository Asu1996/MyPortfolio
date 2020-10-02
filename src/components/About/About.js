import React from 'react'

import Typing from 'react-typing-animation';

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";

import SideMenu from '../UI/SideMenu/SideMenu'

import square from '../../assets/images/square.png'

import './About.css'

const About = () => {
    return(
        <SideMenu>
            <MDBContainer style={{height:'100%'}}>
                <MDBRow style={{height:'100vh'}}>
                    <MDBCol size='6' style={{margin:'auto', paddingRight:'100px'}}>
                        <img src={square} alt='not' className="img-thumbnail img-fluid rounded-circle hoverable about-pic"/>
                    </MDBCol>

                    <MDBCol size='6' style={{margin:'auto', fontSize:'20px'}}>
                    <Typing speed={30}>
                        <Typing.Delay ms={300} />
                        <h2 className="text-justify Font" style={{fontSize:'40px'}}>About Me</h2>
                    </Typing>
                    <br />
                    <br />
                    <Typing speed={10} startDelay={1000}>
                        <p className="text-justify Font">I prefer the land, because the C has no Pythons. </p>
                    </Typing>
                    <br />
                    <Typing speed={10} startDelay={2800}>
                        <p className="text-justify Font">    That's me, 
                            Asutosh Rout, an expert Python Django developer developer and a full 
                            time foodie. An unparalleled interest in web development keeps me fueled 
                            to expand my horizons. Exploring frontend and backend frameworks is my 
                            passion and I look forward to attain great heights in this domain. 
                            With these skills and qualities, 
                            I'm the offer recruiters can't refuse. 
                            <Typing.Delay ms={300} />
                            &#128516;
                        </p>
                    </Typing>
                    <br />
                    <MDBBtn className='resume' color="primary" style={{borderRadius:'5px'}}>
                        <MDBIcon icon="download" size='2x'/><span style={{marginLeft:'10px', fontSize:'20px'}}>Resume</span>
                    </MDBBtn>

                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            </SideMenu>
        
    )
}

export default About
