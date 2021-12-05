import React from 'react'
import axios from "axios";
import  {useEffect , useState} from "react";
import { useHistory } from 'react-router-dom';

export default function Signup() {

    const [inputUsername, setInputUsername] = useState("")
    const [inputEmail, setInputEmail] = useState("")
    const [inputPassword, setInputPassword] = useState("")

    const hestory = useHistory()
    const onclickSignup = async()=> {
       const response =  axios.post("http://localhost:5000/signUp" , {
            name: inputUsername ,
            email: inputEmail ,
            password: inputPassword
        })

        if (response.status === 201){
            hestory.push("/login")
        }else{
            hestory.push("/signup")
        }

        console.log(response.data);
    
    }
    return (
        <div id='login'>
        <input onChange={(e)=>{setInputUsername(e.target.value)}} type="text" placeholder='username' />  
        <input onChange={(e)=>{setInputEmail(e.target.value)}} type="text" placeholder='email' />
        <input onChange={(e)=>{setInputPassword(e.target.value)}} type="password" placeholder='password'/>
        <button onClick={()=> {onclickSignup()}}>signup</button>
        </div>
    )
}
