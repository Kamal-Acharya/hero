import React, { useState } from 'react';

const CreateNote=(props)=>{
const [note,Setnote]=useState({
  title: "",
  content: "",
});

const change=(event)=>{
    // const value=event.target.value;
    // const name=event.target.name;
    const {name,value}=event.target;
Setnote((prev)=>{
return{
    ...prev,
[name]:value,
}
})


}


const addEvent=()=>{
props.passNote(note);
Setnote({
    title: "",
    content: "",
  });
}



    return(
        <>
  <div className="CreateNote">
      <form >
          <input type="text" 
          placeholder="Title"
          autoComplete="off"
          name="title"
          value={note.title}
          onChange={change}/> <br />
          <textarea
           placeholder="Write a Notes" 
           id="" cols="" rows=""
            onChange={change}
            value={note.content}
            name="content"></textarea>
      
      </form>
      <button className="button" onClick={addEvent}>Submit</button>
  </div>

        </>
    );
}
export default CreateNote;