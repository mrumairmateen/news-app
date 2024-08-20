import {Spinner, Container} from 'react-bootstrap';

const Loading = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{height: '200px'}}>
      <Spinner animation="border" role="status" variant="primary">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Container>
  );
};

export default Loading;
