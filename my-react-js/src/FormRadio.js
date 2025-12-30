import { useState } from "react";
export default function FormRadio(){
    const [form, setForm] = useState({
        os:"windows"
    });
    const handleFormRadio = e =>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    };
    const show = () => {
        console.log(`ラジオが選択しているのは${form.os}`);
    };

    const change = () =>{
        form.os="linux";
    }

    return(
        <form>
            <fieldset>
                <legend>使用OS</legend>
                <label htmlFor="os_win">windows</label>
                <input name="os" id="os_win" type="radio" value="windows" onChange={handleFormRadio} checked={form.os==="windows"}></input>
                <label htmlFor="os_linux">Linux</label>
                <input name="os" id="os_linux" type="radio" value="linux" onChange={handleFormRadio} checked={form.os==="linux"}></input>
            </fieldset>
            <button type="button" onClick={show}>送信</button>
            <button type="button" onClick={change}>Linuxに変更</button>
        </form>

    );


}