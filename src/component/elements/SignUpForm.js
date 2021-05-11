import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignUpForm = props => {
  return (
    <Col>
        <form>
            <Row>
                <Col>
                    <div className="form-group">
                        <label>First name</label>
                        <input type="text" className="form-control" placeholder="First name" />
                    </div>
                    </Col>
                    <Col>
                    <div className="form-group">
                        <label>Last name</label>
                        <input type="text" className="form-control" placeholder="Last name" />
                    </div>
                </Col>
                </Row>
                <Row>
                <Col>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>
                    </Col>
                    <Col>
                    <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                    </div>
                </Col>
                </Row>
                <Row>
                <Col>
                <div className="row mb-3 px-3"> 
                    <button type="submit" className="btn btn-blue text-center">Login</button> 
                </div>
                </Col>
                
            </Row>
        </form>
        <div className="row mb-4 px-3">
            <small className="font-weight-bold">
            Do you have an account?
            <Link to="/login" className="text-primary">
                Login
            </Link>
            </small>
        </div>
    </Col>
  );
};
export default SignUpForm;
