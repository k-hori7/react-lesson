import { useState } from "react";

export default function FormTextarea1(){
    const [form,setForm] = useState({
        comment:"Formtextarea1の初期値です。何か変更を加えてください。"
    });

    const handleFormTextarea1 = (e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    }
    const show = (e)=>{
        console.log(`コメントは${form.comment}`);
    }
    return (
        <form>
            <label htmlFor="comment">コメント：</label>
            <textarea id="commnet" name="comment" value={form.comment} onChange={handleFormTextarea1}>
            </textarea>
            <button type="button" onClick={show}>送信</button>
        </form>
    );
};