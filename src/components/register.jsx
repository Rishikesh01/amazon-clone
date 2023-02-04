import axios from "axios";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './register.css'

export const Register = () => {
   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [confirmPassword, setConfirmPassword] = useState("")
   const [err,setErr] = useState("")
   const [isErr, setIsErr] = useState(false)
   const errRef = useRef()


   let navigate = useNavigate()
   const signup = async (e) => {
     e.preventDefault() 
      let items = { name:name,email: email, password:password, confirm_password:confirmPassword }
      try {
         const rsp = await axios.post("http://localhost:8080/register", JSON.stringify(items))
            .then((e) => {
               if (e.status === 200) {
                  navigate(`/login`)
               }
            
            }
            
            )
      } catch (err) {
         if (err.response.status === 400) {
            setErr(err.response.data.error)
         } else if (err.response.status === 500 || err.response.status > 500) {
            setErr("Server failed to respond")
         }else{
            setErr("unknown error")
         }
         setIsErr(true)
         errRef.current.focus()
      }
   }
   return (
      <div className="register">
         <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            className="register_logo"
            alt=""
         />
         <div className="register_container">
            <h1>Register</h1>
            <>
              {isErr ?
                <p ref={errRef} className="register_error" aria-live="assertive">{err}</p> : <div></div>
              }
            </>
            <form>
            <h5>Name</h5>
               <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)} />
               <h5>Email</h5>
               <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
               <h5>Password</h5>
               <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
               <h5>Confirm Password</h5>
               <input type="password" placeholder="confirm password" onChange={(e) => setConfirmPassword(e.target.value)} />
               <button className="register_button" onClick={signup}>Register</button>
            </form>
         </div>
         <Link className="login_registration" to ="/seller/signup">Create new Amazon Seller account</Link>
      </div>
   );
}