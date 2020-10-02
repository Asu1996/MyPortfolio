import React from 'react'
import { scaleRotate as Menu } from 'react-burger-menu'

import square from '../../../assets/images/square.png'

import './SideMenu.css'

const SideMenu = (props) => {
    return(
        <div id="outer-container">
            <Menu disableAutoFocus pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } >
                    
                <img 
                    src={square} 
                    alt='not' 
                    className="img-thumbnail img-fluid rounded-circle hoverable"
                    style={{width:'200px', margin:'auto'}}
                />
                
                <h1 
                    className="d-flex justify-content-center myname" 
                >
                        Asutosh Rout
                </h1>
                
                <a className="menu-item d-flex justify-content-center about-home" href="/">Home</a>
                <a className="menu-item d-flex justify-content-center about-about" href="/about">About Me</a>
                <a className="menu-item d-flex justify-content-center about-skills" href="/skills">Skills</a>
                <a className="menu-item d-flex justify-content-center about-projects" href="/projects">Projects</a>
                <a className="menu-item d-flex justify-content-center about-contact" href="/contact">Contact Me</a>
            </Menu>
            <main id="page-wrap">
                {props.children}
            </main>
        </div>
    )
}

export default SideMenu




