import {Container} from 'react-bootstrap';

const DashboardComponent = (props)=>{
    return(
        <Container fluid="true">
            <h1>Hello, {props.name}</h1>;
        </Container>
    )
}
export default DashboardComponent;