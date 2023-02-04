import "./Login.css";
import axios from "axios";
import { useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";
export const Login = () => {

  const errRef = useRef()
  const [err, setErr] = useState("")
  const [isErr, setIsErr] = useState(false)
  const [success, setSuccess] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const signIn = async (e) => {
    e.preventDefault();
    let item = { email, password }
    let json = JSON.stringify(item)
    try {
      const rsp = await axios.post("http://localhost:8080/login", json).then((e) => {
        if (e.status === 200) {
          let jwt = e.data.token
          document.cookie = "jwt=" + jwt
          setSuccess(true)
        }
      }
      )
    } catch (err) {
      if (err.response.status === 400) {
        setErr("Fill input")
      } else if (err.response.status === 403) {
        setErr("Unauthorized")
      }
      else if (err.response.status === 401) {
        setErr("Username/Password is incorrect")
      } else if (err.response.status === 500 || err.response.status > 500) {
        setErr("Server failed to respond")
      }
      setSuccess(false)
      setIsErr(true)
      errRef.current.focus()
    }

  }

  return (
    <>{success ?
      (<Navigate replace to="/" />) :
      (
        <div className="login">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            className="login_logo"
            alt=""
          />
          <div className="login_container">
            <h1>Hello Sign-in</h1>

            <>
              {isErr ?
                <p ref={errRef} className="login_error" aria-live="assertive">{err}</p> : <div></div>
              }
            </>

            <form>
              <h5>Email</h5>
              <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
              <h5>Password</h5>
              <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
              <button className="login_signInButton" onClick={signIn}>Sign in</button>
              </form>
          </div>
          <p>By signing-in you accept our T&C</p>
          <Link className="login_registration" to ="/signup">Create new Amazon account</Link>
        </div>
      )
    }
    </>
  );
};  
