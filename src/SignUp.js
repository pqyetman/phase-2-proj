
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'


//blank form data
const blankUserData = {
    firstname: '',
    lastname: '',
    email: '',
    password: ''
}

function SignUp({ handleSignUp }) {

    //Setting state for sign up form and destructuring for values 
    const [newUserData, setNewUserData] = useState(blankUserData)
    const { firstname, lastname, email, password } = newUserData;

    //This is to push links to relevant areas
    const history = useHistory();
 

    //this function handles the form data to sign up
    function handleInput(e) {

        const { name, value } = e.target;

        setNewUserData((newUserData) => {

            return {
                ...newUserData,
                [name]: value
            }
        })

    }

    //This submits form data to App to check and see if the user email is valid

    function handleSubmit(e) {
        e.preventDefault()

        handleSignUp(newUserData)

        setNewUserData(blankUserData)
    }

    //This sends user to login screen
    function goToLogin() {
        history.push("/login");
    }

    return (
        <Container fluid>
            <Row>
                <Col>
                    <h1>Please Enter Your Information Below</h1>
                    <Image src={"/HammerHead.png"} />
                </Col>
            </Row >
            <Row className="justify-content-md-center">
                <Col xs={2} md="auto">
                    <form onSubmit={handleSubmit}>

                        <Stack direction="vertical" gap={2}>
                            <label htmlFor="firstname">First Name:</label>
                            <input
                                type="text"
                                id="firstname"
                                onChange={handleInput}
                                name="firstname"
                                value={firstname} />
                            <label htmlFor="lastname">Last Name:</label>
                            <input
                                type="text"
                                id="lastname"
                                onChange={handleInput}
                                name="lastname"
                                value={lastname} />
                            <label htmlFor="email">Email:</label>
                            <input
                                type="text"
                                id="email"
                                onChange={handleInput}
                                name="email"
                                value={email} />
                            <label htmlFor="password">Password:</label>
                            <input
                                type="text"
                                id="password"
                                onChange={handleInput}
                                name="password"
                                value={password} />
                            <Button size="lg" type="submit" className="btn btn-primary">Create Account</Button>
                        </Stack>
                    </form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h6>Already Have An Account?</h6>
                    <Button onClick={goToLogin}>Login to Account</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default SignUp;