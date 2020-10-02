import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

class MyAccord extends Component {
  

  render() {
    

    return (
      <Accordion fluid styled>
        <Accordion.Title
          active={this.props.activeIndex === this.props.index}
          index={this.props.index}
          onClick={this.props.handleClick}
          style={{fontSize:'20px'}}
        >
          <Icon name='dropdown' />
          {this.props.title}
        </Accordion.Title>
        <Accordion.Content active={this.props.activeIndex === this.props.index}>
          {this.props.children}
        </Accordion.Content>
      </Accordion>
    )
  }
}

export default MyAccord