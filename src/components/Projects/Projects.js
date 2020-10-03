import React from 'react'

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import GalleryElement from './GalleryElement'
import MyAccord from './MyAccord'

import burgerbuilder from '../../assets/images/burgerbuilder.png'
import blogpost from '../../assets/images/blogpost.png'
import socialsite from '../../assets/images/socialsite.png'

import classes from './Projects.module.css'

import SideMenu from '../UI/SideMenu/SideMenu'

class Projects extends React.Component {

  state = { activeIndex: -1 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {

    // const { activeIndex } = this.state

    return(
      <SideMenu>
      <MDBContainer style={{ height:'100vh', paddingTop:'18%', }}>
        <MyAccord 
          activeIndex={this.state.activeIndex} 
          index='0' 
          title='Web Development Projects'
          handleClick={this.handleClick}
          >
          <MDBRow>

            <MDBCol style={{height:'225px'}}>
              <GalleryElement 
                mdimage={burgerbuilder} 
                title='Burger Builder'
                description='lodem ipsoooooo'
                githubLink='https://github.com/Asu1996/burger-builder.git'
                webLink='https://react-my-burger-55460.web.app/'
              />
            </MDBCol>

            <MDBCol style={{height:'225px'}}>
              <GalleryElement 
                  mdimage={blogpost} 
                  title='Blogs Site'
                  description='lodem ipsoooooo'
                  githubLink='https://github.com/Asu1996/BlogPost.git'
                  webLink='http://alpha1044.pythonanywhere.com'
                />
            </MDBCol>

            <MDBCol style={{height:'225px'}}>
            <GalleryElement 
                  mdimage={socialsite} 
                  title='Social Site'
                  description='lodem ipsoooooo'
                  githubLink='https://github.com/Asu1996/SocialClone.git'
                  webLink='http://alpha2.pythonanywhere.com/'
                />
            </MDBCol>

        </MDBRow>
      </MyAccord>

      <MyAccord 
        activeIndex={this.state.activeIndex}
        index='1' 
        title='Hardware Projects'
        handleClick={this.handleClick}
        >
       
      </MyAccord>

      <MyAccord 
        activeIndex={this.state.activeIndex}
        index='2' 
        title='Academic Projects'
        handleClick={this.handleClick}
        >
        <GalleryElement />
      </MyAccord>
      </MDBContainer>
      </SideMenu>
    )
}
}

export default Projects