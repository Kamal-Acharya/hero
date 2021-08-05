import React from "react";
import './index'

const List =(props)=>{
    return(
        <div className="row">
        <button>delet</button>
        <li>{props.value}</li>
        </div>
    )
}
export default List;