import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import { useHistory } from "react-router-dom";


function LoginOrSignUp({}) {

  const history = useHistory();

  function handleLogin() {
    history.push("/login");
  }

  function handleSignUp() {
    history.push("/signup");
   
  }


  return (
    <Container fluid>
      <Row>
        <Col>
          <h1 className="Title">Welcome!</h1>
          <Image src ={"/HammerHead.png"} />         
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Click below to Login or Sign Up</p> 
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Stack direction="horizontal" gap={2}>
            <Button onClick={handleSignUp}>Sign Up</Button>
            <Button onClick={handleLogin}>Login</Button>
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default LoginOrSignUp;