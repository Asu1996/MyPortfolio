import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import GalleryElement from './GalleryElement'
import MyAccord from './MyAccord'

import burgerbuilder from '../../assets/images/burgerbuilder.png'

import classes from './Projects.module.css'

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
      <Container style={{marginTop:'200px'}}>
        <MyAccord 
          activeIndex={this.state.activeIndex} 
          index='0' 
          title='Web Development Projects'
          handleClick={this.handleClick}
          >
          <Row>

            <Col className={classes.bord}>
              <GalleryElement mdimage={burgerbuilder} title='Burger Builder'/>
            </Col>

            <Col className={classes.bord}>
              <p>1st para</p>
            </Col>

            <Col className={classes.bord}>
              <GalleryElement />
            </Col>

        </Row>
      </MyAccord>

      <MyAccord 
        activeIndex={this.state.activeIndex}
        index='1' 
        title='Hardware Projects'
        handleClick={this.handleClick}
        >
        <p>2nd para</p>
      </MyAccord>

      <MyAccord 
        activeIndex={this.state.activeIndex}
        index='2' 
        title='Academic Projects'
        handleClick={this.handleClick}
        >
        <GalleryElement />
      </MyAccord>
      </Container>
    )
}
}

export default Projects