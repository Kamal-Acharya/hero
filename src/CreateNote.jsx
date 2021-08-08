import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';


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
          {/* <input type="text" 
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
            name="content"></textarea> */}

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Title</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" name="title" value={note.title}
          onChange={change} />
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Notes</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" name="content" rows="3"  value={note.content}
          onChange={change}></textarea>
</div>
</form>
<div class="col-auto">
    <button onClick={addEvent} class="btn btn-primary mb-3">Keep</button>
  </div>
      
    
      {/* <button className="button" onClick={addEvent}>Submit</button> */}
  </div>

        </>
    );
}
export default CreateNote;