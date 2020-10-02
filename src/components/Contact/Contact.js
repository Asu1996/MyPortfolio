import React from "react";
import emailjs from 'emailjs-com';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import { AwesomeButtonSocial } from "react-awesome-button";
import defaultStyles from 'react-awesome-button/src/styles';

const FormPage = () => {

    function sendEmail(e) {
            e.preventDefault();
            console.log('am i here?');
            emailjs.sendForm('service_58ktmpl', 'template_z3tgluc', e.target, 'user_D6RfJ5D58qxRVrqn7eeAr')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
              e.target.reset()
          }

return (
    <MDBContainer style={{marginTop:'100px'}}>
    <MDBRow>
        <MDBCol md="6">
        <form onSubmit={sendEmail}>
            <p className="h5 text-center mb-4">Write to us</p>
            <div className="grey-text">
            <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
                success="right" name='name'/>
            <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
                success="right" name='email'/>
            <MDBInput label="Subject" icon="tag" group type="text" validate error="wrong" success="right" name='subject'/>
            <MDBInput type="textarea" rows="2" label="Your message" icon="pencil-alt" name='message'/>
            </div>
            <div className="text-center">
            <MDBBtn outline color="secondary" type='submit'>
                Send
                <MDBIcon far icon="paper-plane" className="ml-1" />
            </MDBBtn>
            </div>
        </form>
        </MDBCol>

        <MDBCol md='6'>
            <h3 style={{textAlign:'center'}}>Let's be Internet Friends. :)</h3>
            <AwesomeButtonSocial
                type='facebook'
                cssModule={defaultStyles}
                size='icon'
            >
            </AwesomeButtonSocial>
        </MDBCol>
    </MDBRow>
    </MDBContainer>
);
};

export default FormPage;