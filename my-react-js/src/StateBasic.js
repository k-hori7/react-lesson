import { useState } from "react";

export default function StateBasic({init}){
    const [c,setCount] = useState(init);
    const handleClick = () => {
        setCount(c => c + 1);
        setCount(c => c + 1);


    }
    return (
        <>
            <button onClick={handleClick}>カウント</button>
            <p>{c}回、クリックされました。</p>

        </>
    );
}