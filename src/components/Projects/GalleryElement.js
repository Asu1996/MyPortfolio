import React from "react";
import Container from 'react-bootstrap/Container';
import { MDBView} from "mdbreact";

import MyModal from '../UI/MyModal/MyModal'


class HoverPage extends React.Component {

  state = {
    open:false,
  }

  render() {
    return (
      <Container style={{marginTop:'25px'}}>
        
        <MDBView hover zoom>
          <img
          style={{ cursor:'pointer'}}
            src={this.props.mdimage}
            className="img-fluid"
            alt=""
            onClick={() => {this.setState({open:true})}}
          />
        </MDBView>
        
        <p style={{textAlign:'center', marginTop:'15px', fontSize:'20px'}}>{this.props.title}</p>

        <MyModal 
          title={this.props.title}
          image={this.props.mdimage}
          open={this.state.open}
          toToggle={() => {this.setState({open:!this.state.open})}}
          description={this.props.description}
          githubLink={this.props.githubLink}
          webLink={this.props.webLink}
        />

      </Container>
    );
  }
}

export default HoverPage;