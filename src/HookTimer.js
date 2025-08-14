import { useEffect,useState } from "react";
import "./HookTimer.css"

export default function HookTimer({init}){
    const [count,setCount] = useState(init);

    useEffect(()=>{
        const t = setInterval(()=>{
            setCount(c => c-1)  //ここのcはどこから出てきた？謎の値地に対して処理してる
        },1000);//setIntervalの使い方わからない多分1000msに一回何かするって感じかな

        return ()=>{
            clearInterval(t);   //clearintervalって何
        };
    },[])//ここから配列だとどうなるのdeps渡さない場合との違いは？

    return (
        <div className={count<0 ? "warn" : ""}>
            現在のカウント:{count}
        </div>
    );
}