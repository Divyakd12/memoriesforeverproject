


import { useState } from "react";
import "./Auth.css";

function Register(){

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const register=(e)=>{

e.preventDefault();

const user={email,password};

localStorage.setItem("registeredUser",JSON.stringify(user));

alert("Registration Successful");

window.location.href="/login";

};

return(

<div className="auth">



<form onSubmit={register}>
<h2>Register</h2>
<input
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button>Register</button>

</form>

</div>

);

}

export default Register;