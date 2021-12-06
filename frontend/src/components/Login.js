import React from 'react'
import axios from "axios";
import  {useEffect , useState} from "react";
import { useHistory } from 'react-router-dom';
import { FaExclamationCircle } from 'react-icons/fa';

export default function Login({setToken , token , setName,setUserId}) {

    const [email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const hestory = useHistory()

    const [stateLogin, setStateLogin] = useState("")

    const [ShowWartinig, setShowWartinig] = useState(false)



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
                setStateLogin("خطا في اسم المستخدم او كلمة المرور")
                setShowWartinig(true)
                setTimeout(()=>{
                    setStateLogin("")
                    setShowWartinig(false)
                } , 1500)

            }else if(error.response.status === 403){
                console.log(error.response);
                setStateLogin("خطا في اسم المستخدم او كلمة المرور")
                setShowWartinig(true)
                setTimeout(()=>{
                    setStateLogin("")
                    setShowWartinig(false)
                } , 1500)
               
            }
        }
       

     
        
    }

    return (
        <div id='form'>
            <div id='login'>
            
            <input onChange={(e)=>{setEmail(e.target.value)}} type="text" placeholder='email' />
            <input onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='password' />
            <button onClick={()=> {onClickLogin()}}>Login</button>
            </div>

            {ShowWartinig ? <div style={{display : "flex", justifyContent : "center" }} className="warning">
                <FaExclamationCircle style={{fontSize : "27px"}}/>
                     <p style={{ textAlign : "center" }}>{stateLogin}</p>
            </div> : ""}
        </div>
    )
}
