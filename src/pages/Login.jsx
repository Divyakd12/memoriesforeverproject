import { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

function Login(){

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const login=(e)=>{
e.preventDefault();

const user = JSON.parse(localStorage.getItem("registeredUser"));

if(user && user.email===email && user.password===password){

localStorage.setItem("user",email);

alert("Login Successful");

window.location.href="/";

}else{

alert("Invalid Login");

}

};

return(
<>
<div className="auth">



<form onSubmit={login}>
<h2>Login</h2>


<input
type="email"
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
required
/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
required
/>

<button type="submit">Login</button>

<p className="register">
Don't have an account? <Link to="/register">Register</Link>
</p>

</form>

</div>
<style>


</style>
</>
);

}

export default Login;