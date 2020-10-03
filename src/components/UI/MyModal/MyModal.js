import React from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon } from 'mdbreact';

const ModalPage = (props) => {

  return (
    <MDBContainer>

      <MDBModal isOpen={props.open} toggle={props.toToggle} centered>
        <MDBModalHeader toggle={props.toToggle}>{props.title}</MDBModalHeader>
        <MDBModalBody>
            <img src={props.image} className="img-fluid" alt="" />
            {props.description}
        </MDBModalBody>
        <MDBModalFooter className='d-flex justify-content-center'>
            <MDBBtn color='dark' href={props.githubLink} target="_blank">
              <MDBIcon size='2x' fab icon="github" className="mr-1"/> <span style={{fontSize:'20px'}}>Github</span>
            </MDBBtn>

            <MDBBtn href={props.webLink} target="_blank" >
              <MDBIcon size='2x' icon="external-link-alt" className="mr-1"/> <span style={{fontSize:'20px'}}>The Website</span>
            </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
  }


export default ModalPage;