import React, { useState, useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.confiq';
import { useHistory, useLocation } from 'react-router-dom';
import { TravelContext } from '../../App';
import { Form, Button } from 'react-bootstrap';

firebase.initializeApp(firebaseConfig);

function Login() {
    let history = useHistory();
    let location = useLocation();
  
    let { from } = location.state || { from: { pathname: "/" } };

  const [newUser, setNewUser] = useState(false)
  const [user, setUser] = useState({
    isSignIn: false,
    name: '',
    email: '',
    photo: '',
    password: '',
    confirmPassword: ''
  })

const [ travel, setTravel] = useContext(TravelContext)

  const handleGoogleSignIn = (e) => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider)
    .then((res) => {
      const {displayName, email, photoURL} = res.user
        const userSignIn ={
          isSignIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
          success: true
        }
        setUser(userSignIn)
        setTravel(userSignIn)
        history.replace(from);
        console.log(user)
    })
    
    .catch( (res) => {
      // Handle Errors here.
      
    });
  }

  
  const handleFbSignIn = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(fbProvider)
    .then((res) => {
      const {displayName, email, photoURL} = res.user
        const userSignIn ={
          isSignIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
          success: true
        }
        setUser(userSignIn)
        setTravel(userSignIn)
        history.replace(from);
        console.log(user)

    }).catch((res) =>  {
      // Handle Errors here.
      
    });

  }

  const handleOnBlur =(e) => {
    let isFieldValied;
    if (e.target.name === 'email') {
      isFieldValied = /\S+@\S+\.\S+/.test(e.target.value);    
    }
    if (e.target.name === 'password') {
      const isPasswordValied = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValied = isPasswordValied && passwordHasNumber;  
    }
    if (e.target.name === 'confirmPassword') {
      const isPasswordValied = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValied = isPasswordValied && passwordHasNumber;  
    }

    if (isFieldValied) {
   const newUserInfo = {...user};
      console.log(newUserInfo);
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo) 
    }
  }

  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then(res => {
      const newUserInfo = {...user}
      setUser(newUserInfo)
      //console.log(newUserInfo)
      updateUserName(user.name)
      
      newUserInfo.error = '';
      newUserInfo.success = true;
      
    })
    .catch(function(error) {
      // Handle Errors here.
      const newUserInfo = {...user}
      setUser(newUserInfo)
      newUserInfo.error = error.message;
      newUserInfo.success = false;
      // ...
    });
    }

    if (!newUser && user.email && user.password) {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        const newUserInfo = {...user}
        newUserInfo.error = '';
        newUserInfo.success = true;
        setUser(newUserInfo)
        setTravel(newUserInfo)
        history.replace(from);
      })
      .catch(function(error) {
        // Handle Errors here.
        const newUserInfo = {...user}
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        setUser(newUserInfo)
        // ...
      });
    }
   
   e.preventDefault()
  }

  const updateUserName = (name, photo) => {
    const user = firebase.auth().currentUser;
    user.updateProfile({
      displayName: name,
      photoURL: photo
    }).then(function() {
       console.log('User name Update successfully.')
    }).catch(function(error) {
      // An error happened.
    });
  }

  const handleSignOut = () => {
    firebase.auth().signOut()
    .then(function() {
      const signOutUser ={
        isSignIn: false,
        name: '',
        email: '',
        photo: '',
        error: '',
        success: false
      }
      setUser(signOutUser)
      
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
  }

 
  
  return (
    <div>
        <div className='d-flex justify-content-center'>
        <Form onClick={handleSubmit} className="border border-primary mr-5 p-5">
          <Form.Label className='font-weight-bold'>{newUser ? 'Login' : 'Create an Account'} </Form.Label>
        
        <Form.Group controlId="">
        {newUser && <Form.Label>First Name</Form.Label>}
            { newUser && <Form.Control type="text" name='name' onBlur={handleOnBlur} placeholder="Enter Name" />}
        {newUser && <Form.Label>Last Name</Form.Label>}
            { newUser && <Form.Control type="text" name='name' onBlur={handleOnBlur} placeholder="Enter Name" />}
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" name="email" onBlur={handleOnBlur} placeholder="Enter email" required />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='password' onBlur={handleOnBlur} placeholder="Password" required />
        </Form.Group>
        
        
        <Form.Group controlId="formBasicPassword">
            {newUser && <Form.Label>Confirm Password</Form.Label>}
            {newUser && <Form.Control type="password" name='confirmPassword' onBlur={handleOnBlur} placeholder="Confirm Password" />}
        </Form.Group>

        <Form.Group controlId="">
            <Form.Control type="submit" className='bg-primary text-white' value={newUser ? "Create an account" : " Login"} />
            <Form.Label onClick={() => setNewUser(!newUser)} style={{color: 'orange'}}> {newUser ? 'Already have a account? Login' : 'Do not have a account? Create an account'} </Form.Label>
        </Form.Group>
        </Form>
        </div>
        <br/>
        { user.success && <p style={{color: 'green'}}>User { newUser ? 'created' : 'Logged In'} successfully</p>}
          <p style={{color: 'red'}}>{user.error} </p>
    
       
       <div className='d-flex justify-content-center '>
        {
        user.isSignIn ? 
          <Button variant="primary" onClick={handleSignOut}>Sign Out with Google</Button> :
            <Button variant="primary" onClick={handleGoogleSignIn}>Sign In with Google</Button>       
        }
      </div>
      <br/>
      <div className='d-flex justify-content-center '>
        {
        user.isSignIn ? 
          <Button variant="primary" onClick={handleSignOut}>Sign Out with FaceBook</Button> :
            <Button variant="primary" onClick={handleFbSignIn}>Sign In with FaceBook</Button>
        }
      </div>

    </div>
  );
}

export default Login;
