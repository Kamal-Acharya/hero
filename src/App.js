  import React, { useState } from 'react';


 const App=()=>{

   const[fullname,setFullname]=useState();
   const[name,setname]=useState("");


   const inputEvent=(event)=>{
     console.log(event.target.value);
     setFullname(event.target.value);
   }
const submit=()=>{
  setname(fullname);
}
   const onSubmits=(e)=>{
     e.preventDefault();
     alert("Submitted");
   }
 return(
   <>
   <form onSubmit={onSubmits}>
   <h2>{name}</h2>
   <input type="text"
   placeholder="Enter your name"
   name="name"
   onChange={inputEvent}
   value={fullname}
   />
     <input type="text"
   placeholder="Enter your age"
   name="age"
   onChange="change"

   />
     <button onClick={submit}> Click me</button>
     </form>
   </>
   )
 }
 export default App;