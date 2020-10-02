import React from "react";
import Container from 'react-bootstrap/Container';
import { MDBView} from "mdbreact";
import { Button, Image, Modal } from 'semantic-ui-react'

import classes from './GalleryElement.module.css'




class HoverPage extends React.Component {

  state = {
    open:false,
  }

  render() {
    return (
      <Container style={{marginTop:'20px'}}>
        
        <MDBView hover zoom>
          <img
            src={this.props.mdimage}
            className="img-fluid"
            alt=""
            onClick={() => {this.setState({open:true})}}
          />
        </MDBView>
        
        <p style={{textAlign:'center', marginTop:'15px', fontSize:'20px'}}>{this.props.title}</p>

        <Modal
          onClose={() => {this.setState({open:false})}}
          onOpen={() => {this.setState({open:true})}}
          open={this.state.open}
          className={classes.setMod}
        >
          <Modal.Header>Upload image</Modal.Header>
          <Modal.Content image>
            <Image size='medium' src='/images/wireframe/image-square.png' wrapped />
            <Modal.Description>
              <p>Would you like to upload this image?</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={() => {this.setState({open:false})}}>Cancel</Button>
            <Button onClick={() => {this.setState({open:false})}} positive>
              Ok
            </Button>
          </Modal.Actions>
        </Modal>

      </Container>
    );
  }
}

export default HoverPage;