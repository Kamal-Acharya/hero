import React from 'react';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';

const Note = (props) => {
  const deleteNote=()=>{
    props.deleteitem(props.id);

  }
    return (
     
            <div class="card">

  <div class="container">
    <h4><b>{props.title}</b></h4>
    <p>{props.content}</p>
    <button className="btns" onClick={deleteNote}>   <DeleteForeverTwoToneIcon /></button>
  
  </div>
</div>

        
    );
}
export default Note;