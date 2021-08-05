import React, { useState } from 'react';

import List from './List';

const Todo=()=>{
const [inputList,setinputList]=useState("kamal");
const [Items,setItems]=useState([]);

    const ItemEvent=(event)=>{
setinputList(event.target.value);
    }
    const listOfItems=()=>{
setItems((oldItems)=>{
return [...oldItems,inputList]
}); 
    }
    return(
<>
<div>
<div>
   <h1>Todo List</h1>
   <input type="text"
   placeholder="Enter the list"
   onChange={ItemEvent} /> 
   <button onClick={listOfItems}> + </button>

   <ol>
     
       {Items.map((val)=>{
return(
    <List value={val} />
)
       })}
       </ol>
    </div> 
</div>

</>
    )


};
export default Todo;