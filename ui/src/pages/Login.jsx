import React, { useState } from 'react';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import "../styles/Login.css";

const Login = () => {
    const [isLogin, setIsLogin] = useState(false);
    const[fullname,setfullname] = useState("")
    const[email,setemail] = useState("")
    const[password,setpassword] = useState("")
    const loginhandle = ()=>{
        setIsLogin(!isLogin)
    }
    const getinputdata = (e)=>{
        e.preventDefault();
        console.log(fullname,email,password)
        setfullname("")
        setpassword("")
        setemail("")


    }

    return (
        <div>
            <Header />
            <div className="form-wrapper">
                <h2>{isLogin ? "Login" : "Sign Up"}</h2>
                <form onSubmit={getinputdata}>
                    {!isLogin && (
                        <div className="form-control">
                            <input value={fullname} onChange={(e)=>setfullname(e.target.value)} type="text" required />
                            <label>Fullname</label>
                        </div>
                    )}
                    <div className="form-control">
                        <input value={email} onChange={(e)=>setemail(e.target.value)} type="email" required />
                        <label>Email</label>
                    </div>
                    <div className="form-control">
                        <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} required />
                        <label>Password</label>
                    </div>
                    <button type="submit">{isLogin?"Login":"Signup"}</button>
                    <div className="form-help">
                        <div className="remember-me">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <a href="#">Need help?</a>
                    </div>
                </form>
                <p onClick={loginhandle}>{isLogin?"New to Netflix?: signup":"Already have an account?: login"}</p>
                <small>
                    This page is protected by Google reCAPTCHA to ensure you're not a bot.
                    <a href="#">Learn more.</a>
                </small>
            </div>
            <Footer />
        </div>
    );
}

export default Login;
