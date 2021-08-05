import React from 'react';


const Note = (props) => {
    return (
     
            <div class="card">

  <div class="container">
    <h4><b>{props.title}</b></h4>
    <p>{props.content}</p>
  </div>
</div>

        
    );
}
export default Note;