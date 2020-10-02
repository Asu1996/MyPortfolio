import React from 'react'
import { MDBBtn, MDBBtnGroup, MDBIcon, MDBTooltip } from "mdbreact";
import Typing from 'react-typing-animation';

import './Home.css'

const Home = () => {
    return(
        <div style={{height:'100vh'}} className='Back'>
            <div style={{height:'50%'}}>
                
                <Typing speed={80}>
                <Typing.Delay ms={300} />
                <p style={{
                        height:'50%', 
                        textAlign:'center', 
                        paddingTop:'150px'}} 
                    className="Welcome">
                        Hello World!
                        <Typing.Backspace count={6}/>
                        There!
                        <Typing.Backspace count={12}/>
                        Hey There!
                </p>
                </Typing>
            </div>

            <div style={{ width:'100%', paddingTop:'100px'}} className="d-flex justify-content-center" role="toolbar" >
                <MDBBtnGroup className="mr-2" size='lg'>
                
                <MDBTooltip placement="top">
                    <MDBBtn className='first' color="indigo lighten-2" href='/about'>
                        <MDBIcon icon="user" size='2x'/>
                    </MDBBtn>
                    <div>About Me</div>
                </MDBTooltip>    

                <MDBTooltip placement="top">    
                    <MDBBtn className='second' color="blue lighten-2" href='/skills'>
                        <MDBIcon icon="cogs" size='2x'/>
                    </MDBBtn>
                    <div>Skills</div>
                </MDBTooltip>

                <MDBTooltip placement="top">
                    <MDBBtn className='third' color="light-blue lighten-2" href='/projects'>
                        <MDBIcon icon="code" size='2x'/>
                    </MDBBtn>
                    <div>Projects</div>
                </MDBTooltip>

                <MDBTooltip placement="top">
                    <MDBBtn className='fourth' color="cyan lighten-2" href='/contact'>
                        <MDBIcon icon="address-card" size='2x'/>
                    </MDBBtn>
                    <div>Contact Me</div>
                </MDBTooltip>

                </MDBBtnGroup>
            </div>

        </div>
    )
}

export default Home;


// style={{ width:'50%',marginLeft:'45vh', marginRight:'55vh'}} 