import React from 'react'

const DynamicComponent=props=>(
    <div>
        Component {props.match.params.id}
        {console.log(props)}
    </div>
);

export default DynamicComponent;