import { useState, useEffect } from "react";


const Home =()=>{

    const [count, setCount] = useState(0);
    const [minute, setMinute] = useState(0);

    useEffect(() => {
        setMinute(count + 1);
      },[count]);

    return <>
        <h2>Home page: {minute} : {count} </h2>
        <button onClick={() => setCount(count+1)}>Plus</button>
    </>

}

export default Home;