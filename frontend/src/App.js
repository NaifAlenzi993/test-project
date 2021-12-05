
import axios from "axios";
import "./style.css"

import Courses from "./components/courses";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar"
import {Route} from "react-router-dom";
import  {useEffect , useState} from "react";
import Home from "./components/Home"
import Book from "./components/Book";
// import "bootstrap/dist/css/"




function App() {

  const [token, setToken] = useState("")
  const [userId, setUserId] = useState("")
  const [name , setName] = useState("")

  useEffect(() => { 
      if (!token) {
          const mytoken = JSON.parse(localStorage.getItem("token"))
          setToken(mytoken)
      }
  }, [])
 
  
  return (
    <div >

      <Navbar token={token} setToken={setToken} setName = {setName} name = {name}></Navbar>

      <Route exact path= "/courses" render={() => {
        return <Courses token = {token} setToken = {setToken} userId={userId}/>
      }} />

    
      <Route exact path= "/login" render={() => (
        <Login token = {token} setToken = {setToken} setName={setName} setUserId={setUserId} />
      )
      }/>
      <Route exact path= "/signup" render={() => (
        <Signup token = {token} setToken = {setToken} />
      )
      }/>

      <Route exact path= "/book/:id" render={() => (
        <Book />
      )
      }/>

      <Route exact path= "/home" render={() => (
        <Home  />
      )
      }/>
      
       {/* {token} */}
    </div>
  );
}

export default App;
