import { useImmer } from "use-immer";

export default function StateNestImmer(){
    const [form,setForm] = useImmer({
        name: "yamada Tarou",
        address: {
            prefecture:"Hiroshima",
            city: "kasiwabara"
        }
    });
    //一段目
    const handleForm = e => {
        setForm(form =>{
            form[e.target.name] = e.target.value;
        });
    };
    //二段目
    const handleFormNest = e =>{
        setForm(form=>{
            form.address[e.target.name] = e.target.value;
        });
    };
    return (
        <form>
            <div>
                <label htmlFor="name">名前</label>
                <input id="name" name="name" type="text" onChange={handleForm} value={form.name}></input>
            </div>
            <div>
                <label htmlFor="prefecture">住所（都道府県）</label>
                <input id="prefecture" name="prefecture" type="text" onChange={handleFormNest} value={form.address.prefecture}></input>
            </div>
            <div>
                <label htmlFor="city">住所（市町村）</label>
                <input id="city" name="city" type="text" onChange={handleFormNest} value={form.address.city}></input>
            </div>
            <div>
                <button type="button">送信</button>
            </div>
        </form>
    )
}