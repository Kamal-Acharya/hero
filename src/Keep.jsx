import React, { useState } from 'react';
import Footer from './Footer';
import Note from './Note';
import CreateNote from './CreateNote';
import './index.css';
import logo from './1.png';


const Keep=()=>{
    const [addItem,setAddItem]=useState([]);

    const add=(note)=>{
      
        // alert(note.title);

        setAddItem((prevdata)=>{
            return (
                [...prevdata,note]
            )
        })
       
      
      }
      const onDelete=(id)=>{
         alert("deleted"); 
         setAddItem((olddata)=>
         olddata.filter((currdata,indx)=>{
             return indx!==id;
         }))

      };
    return(
        <>
        <div className="nav">
       
        <img src={logo} alt="" />
        <h1>Acharya Keep App </h1>
        </div>
      
        <CreateNote passNote={add} />
 <div className="box">
 {
     addItem.map((val,index)=>{
         return(
<Note 
key={index}
id={index}
 title={val.title}
 content={val.content}
 deleteitem={onDelete}
 />
         )

     })
 }
 </div>

 <Footer />


        </>
    );
}
export default Keep;