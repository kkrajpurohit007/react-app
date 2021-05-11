import { Container,Row,Col } from "react-bootstrap";
import ImageContent from '../elements/ImageContent';
import SignUpForm from "../elements/SignUpForm";


const SignUpComponent = props => {
  return (
    <Container>
      <Row className="py-4">
        <Col className="align-middle">
          <ImageContent imageurl="https://i.imgur.com/uNGdWHi.png" />
        </Col>
        <Col>
            <Row className="px-3 mb-4">
                    <div class="line"></div> 
                        <small class="or text-center">Registration</small>
                    <div class="line"></div>
                </Row>
          <Row>  
            <SignUpForm />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default SignUpComponent;
