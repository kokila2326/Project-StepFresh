import React from 'react'
import Home from './Home'
import style from "../src/Components/Css/login.module.css"

function Login() {
  return (
    <div className={style.card}>
        <h1 className={style.title}>Log In</h1>
        <p className={style.note}> log in using your username and password</p>
        <form>
            <div className={style.input1}>
                <input type="text"/><br></br>
                </div>
                <div className={style.input2}>
                <input type="password"/>
                </div>
           
            <button onClick={()=>Home}>login </button>
            <p className={style.msg}> or new user</p>
            <button>sign up</button>
        </form>
    </div>
  )
}

export default Login