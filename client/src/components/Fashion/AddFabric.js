import React from 'react';

const AddFabric = props => (
  <div>
    <input name="addFabric" className="measInput"  placeholder="Enter Fabric #" onChange={props.changeHandler} />
    <button class="measInput" onClick={props.clickHandler}>Add Fabric</button> 

  </div>
)





export default AddFabric;