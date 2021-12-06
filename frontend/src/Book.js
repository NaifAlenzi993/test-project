
import axios from "axios";
import React , {useEffect , useState } from "react";
import BookSelect from "./components/BookSelect";

export default function Book({token,userId}) {

    const [bookd, setBookd] = useState([])
    

    useEffect(() => {
        const getData = async () => {
            console.log(token);
            const respone = await axios.get("http://localhost:5000/book" , {headers: { authorization: `Bearer ${token}` }})
            setBookd(respone.data); 
             console.log(respone.data);
        }
        getData();
    }, [])


  const deletbook= async (id)=>{
    const respone = await axios.delete("http://localhost:5000/book/"+id , {headers: { authorization: `Bearer ${token}` }})
            setBookd(respone.data); 
             console.log(respone.data);
  }

    return (
        <div>

{bookd.map((elem,i)=>{
    return <div className="idBook">
   <p> {elem.name}</p>
    {elem.startData}
    {elem.expiryData}
    {/* {elem._id} */}

    {/* <img src={BookSelect.} alt="" /> */}

    <button onClick={()=>{deletbook(elem._id)}} id="btn" class="btn btn-primary">
        الغاء الحجز
     </button>
    </div>
})}

             
        </div>
    )
}
