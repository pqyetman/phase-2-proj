import './App.css';
import { Route, Switch, useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Login.js'
import SignUp from './SignUp.js';
import Home from './Home.js';
import LoginOrSignUp from "./LoginOrSignUp.js"
import { useState, useEffect } from 'react'
import ErrorModal from './ErrorModal';

const blankUser = {
  firstname: 'Test',
  lastname: 'Test',
  email: 'Test',
  password: 'Test'
}

function App() {

  const history = useHistory();

//Modal
  const [show, setShow] = useState(false);
  const  handleShow = () => setShow(true);

  function closeModal(){
    setShow(false)
  }
 
  
  //two states 1 for chekcing id the other for passing and setting the userOne into home

  const [userCheck, setUserCheck] = useState([])
  const [userOne, setUserOne] = useState(blankUser)
  const [message, setMessage] = useState("")

  //Loadup User DB

  useEffect(() => {

    fetch("http://localhost:3000/user")
      .then(res => res.json())
      .then(userdata => { setUserCheck(userdata) })


  }, [])

  //Check to see if user has correct credentials and login to home

  function handleLogin(user) {

    if ((userCheck.find(userCheck => (userCheck.email === user.email && userCheck.password === user.password)))) {
      console.log("Successful Login")
      setUserOne(userCheck.filter(userCheck => userCheck.email === user.email)[0]);
      console.log(userOne)
      history.push("/home");
    }
    else {
     
      //Send message and opens modal
      setMessage("Incorrect username or password")
      handleShow()
    }
  }

   //Check to see if user email has been take, then login to hom
  function handleSignUp(user) {

    if ((userCheck.find(userCheck => (userCheck.email === user.email)))) {
      //Send message and opens modal
      setMessage(`The email ${user.email} is already in use, please select another email or login`)
      handleShow()
    }
    else {

      fetch("http://localhost:3000/user", {

        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)

    }).then(r => r.json())
        .then(data => setUserOne(data))
        console.log(userOne)
        history.push("/home")
      
    }
  }


  return (

    <div className="App"> 
    <ErrorModal message = {message} closeModal = {closeModal} show ={show}/>    
      <Switch>
        <Route exact path="/signup">
          <SignUp handleSignUp ={handleSignUp} />
        </Route>
        <Route exact path="/login">
          <Login handleLogin={handleLogin} />
        </Route>
        <Route exact path="/home">
          <Home userOne ={userOne}/>
        </Route>
        <Route path="/">
          <LoginOrSignUp />
        </Route>
      </Switch>
    </div>
  );
}

export default App
