import { useState } from "react";

export default function FormTextarea(){
    //state初期化
    const [form,setForm] = useState(
        {
            comment:"ああああ"
        }
    );
    //testarea変更時にFormの値を変更
    const handleForm = (e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    };

    const show = ()=>{
        console.log(`コメント：${form.comment}`);
    };

    return (
        <form>
            <label htmlFor="comment">コメント:</label>
            <textarea id="comment" name="comment" cols={30} rows={7} value={form.comment} onChange={handleForm}></textarea><br />
            <button type="button" onClick={show}>送信</button>
        </form>
    );
}