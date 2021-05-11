import {Container} from 'react-bootstrap';

const ProfileUpdateComponent = (props)=>{
    return(
        <Container fluid="true">
            <h1>Hello, {props.name}</h1>;
        </Container>
    )
}
export default ProfileUpdateComponent;