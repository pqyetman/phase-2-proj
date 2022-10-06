import Button from 'react-bootstrap/Button';
import { useState } from 'react'
import { useHistory } from "react-router-dom";
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'


const blankUser = {
    email: '',
    password: '',
}

function Login({ handleLogin }) {

    //State for login form and destructuring for values

    const [userOne, setUserOne] = useState(blankUser)

    const { email, password } = userOne

    //This is to push links to relevant areas

    const history = useHistory();

    //Send user to sign up pagge

    function goToSignUp() {

        history.push("/signup");

    }

    //This captures typed data and sends it to state

    function handleUserInput(e) {

        const { name, value } = e.target

        setUserOne(userOne => {
            return {
                ...userOne,
                [name]: value
            }
        })
    }

    //This submits typed data and sends it to callback in App where it is checked against existing users

    function submitUserData(e) {

        e.preventDefault();
        handleLogin(userOne);
        setUserOne(blankUser);
    }



    return (
        <Container fluid>
            <Row>
                <Col>
                    <h1>Please Login</h1>
                    <Image src={"/HammerHead.png"} />
                </Col>
            </Row >
            <Row className="justify-content-md-center">
                <Col xs={2} md="auto">
                    <form onSubmit={submitUserData}>
                        <Stack direction="vertical" gap={2}>
                            <label className="form-label">Email address:</label>
                            <input
                                type="text"
                                name="email"
                                onChange={handleUserInput}
                                value={email} />
                            <label className="form-label">Password:</label>
                            <input
                                type="text"
                                name="password"
                                onChange={handleUserInput}
                                value={password} />

                            <button type="submit" className="btn btn-primary">Sign In</button>
                        </Stack>
                    </form>
                </Col>
            </Row>
            <div className="Signup">Dont Have an Account?</div>
            <Button onClick={goToSignUp}>Go Sign Up</Button>
        </Container>
    )
}

export default Login;