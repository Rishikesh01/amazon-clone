import "./Login.css";
import axios from "axios";
export const Login = () => {
  const signIn = (e) =>{
    e.preventDefault();
  
  }
  const register =(e)=>{
    e.preventDefault();
    
  }
  
  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        className="login_logo"
        alt=""
      />
      <div className="login_container">
        <h1>Hello Sign-in</h1>
        <form>
        <h5>Email</h5>
        <input type="text" />
        <h5>password</h5>
        <input type="password"/>
        <button className="login_signInButton" onClick={signIn}>Sign in</button></form>
      </div>
      <p>By signing-in you accept our T&C</p>
      <button className="login_registration"onClick={register}>Create new Amazon account</button>
    </div>
  );
};
