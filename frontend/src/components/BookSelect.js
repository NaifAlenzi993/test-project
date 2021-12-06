import React from 'react'
import {useParams , Link} from 'react-router-dom';
import  {useEffect , useState} from "react";
import axios from "axios";

export default function BookSelect({token,userId}) {
    const { id }= useParams()

    const [bookSelect, setBookSelect] = useState({})
const [inputstart   , setInputstart] = useState("")
const [expir  , setExpir] = useState("")
    useEffect(() => {

        axios.get(`http://localhost:5000/bookselect/${id}` , 
        {headers: { authorization: `Bearer ${token}` }}
        )
        .then(res => {
        const data = res.data;
        console.log(data);
        setBookSelect(data[0]);
        }).catch(err => console.log(err))

    }, [])

    const addBook=async()=>{
    const respons =await axios.post("http://localhost:5000/book", 
    {
        name: bookSelect.name ,
       startData: inputstart,
       expiryData: expir ,
       user: userId,
       hotel: id,
    }
    ,
    {headers: { authorization: `Bearer ${token}` }} )
    // console.log(respons.data);
    }

    return (
      <div className="container">
        <div class="card">
          <div class="card-header">
            <h4>{bookSelect.name}</h4>
          </div>
          <div class="card-body">
            <p class="card-text">{bookSelect.description}</p>
            <img src={bookSelect.img} alt="" />
            <h1>{bookSelect.price} S.R</h1>
            <button onClick={()=>{addBook()}} href="#" class="btn btn-primary">
              احجز الان
            </button>
    <input onChange={(e)=>{setInputstart(e.target.value)}} type="text" placeholder="بداية الحجز" />
    <input onChange={(e)=>{setExpir(e.target.value)}} type="text" placeholder='نهاية الحجز'/>

          </div>
        </div>
      </div>
    );
}
