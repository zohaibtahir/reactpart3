import { useState } from "react";
import Child from "./Child";

export default function Parent(){

    const [parentinc, setParentinc] = useState(0);
    const [childinc, setChildinc] = useState(0);

    function increaseParent (){
        setParentinc(parentinc + 1);
    }

    function increaseChild(){
        setChildinc(childinc + 1);
    }

    return(
        <div>
            <h2>Parent Element : {parentinc}</h2>
            <Child count={childinc}/>

            <button onClick={increaseParent}>Parent Increase</button>
            <button onClick={increaseChild}>Child Increase</button>
        </div>

    )
}