import React from "react";

function Child({count}){
    console.log('child render');
    return <div>
        
        <h2>Child is {count}</h2>
        
    </div>
}

export default React.memo(Child);