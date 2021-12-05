import React from 'react'
import { useHistory } from 'react-router-dom';

export default function Home() {
    const hestory = useHistory()
    const login=()=>{
        hestory.push("/login")
    }
    return (
        <div>
            <div className="home">
               <p> اهلا بك في bookHotel نقوم بمساعدتك لايجاد سكنك الخاص في وقت بسيط </p>
            </div>
        </div>
    )
}
