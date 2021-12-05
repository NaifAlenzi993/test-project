import React from 'react'
import axios from "axios";
import  {useEffect , useState} from "react";
import { useHistory } from 'react-router-dom';

export default function Login({setToken , token , setName,setUserId}) {

    const [email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const hestory = useHistory()

    const [stateLogin, setStateLogin] = useState("")



    const onClickLogin = async ()=> {
        try {
            const response =  await axios.post("http://localhost:5000/login" , {
                email : email , 
                password : Password
            })
            setToken(response.data.token)
            setUserId(response.data.userId)
            // setName(email)
            localStorage.setItem("token",JSON.stringify(response.data.token))
            console.log(response.data.token);
            hestory.push("/courses")
            setStateLogin("login Done !")
        } catch (error) {
            if (error.response.status === 404) {
                console.log(error.response);
                setStateLogin(error.response.data)
            }else if(error.response.status === 403){
                console.log(error.response);
                setStateLogin(error.response.data)
            }
        }
       

     
        
    }

    return (
        <div id='login'>
            <h3>{stateLogin}</h3>
            <input onChange={(e)=>{setEmail(e.target.value)}} type="text" placeholder='email' />
            <input onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='password' />
            <button onClick={()=> {onClickLogin()}}>Login</button>
        </div>
    )
}
