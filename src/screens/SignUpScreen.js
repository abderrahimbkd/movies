import React, { useRef } from "react";
import "./SignUpScreen.css";
import { auth } from "../firebase";
 

const SignUpScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser);
      
    }).catch((error)=>{alert(error.message)});
  };
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser);
      
    }).catch((error)=>{alert(error.message)});
  };

  return (
    <div className="signup_Screen">
      <form>
        <h1>Sign In</h1>
        <input placeholder="Email" type="email" ref={emailRef} />
        <input placeholder="Password" type="password" ref={passwordRef} />
        <button type="submit" onClick={signIn}>
          sign In
        </button>
        <h4>
          <span className="signupScreen_gray">New Netflix?</span>
          <span className="signupScreen_link" onClick={register}>
            Sign Up Now
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignUpScreen;
