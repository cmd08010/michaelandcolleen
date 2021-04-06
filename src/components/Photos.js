import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

function Photos() {
  return (
    <Container>
      <div className="row">
        <div className="col-md-auto">
          Photos
          <Col xs={6} md={4}>
            <Image src="images/beach.jpg" thumbnail/>
            <Image src="images/pic1.jpg" thumbnail/>
          </Col>
        </div>
      </div>
    </Container>
  );
}

export default Photos;
