import {Container, Row, Col} from 'react-bootstrap';
import {useState} from 'react';
import './SignIn.css';
import SignInForm from '../elements/SignInForm';
import ImageContent from '../elements/ImageContent';

const SignInComponent = props => {
//   const [loading, setloading] = useState(false);
  return (
    <>
    <Container>
        <Row className="py-4">
            <Col className="align-middle">
                <ImageContent imageurl="https://i.imgur.com/uNGdWHi.png" />
            </Col>
            <Col>
                <Row className="px-3 mb-4">
                    <div class="line"></div> 
                        <small class="or text-center">Login</small>
                    <div class="line"></div>
                </Row>
                <Row>
                    <SignInForm />
                </Row>
            </Col>
        </Row>
    </Container>
    </>
  );
};
export default SignInComponent;
