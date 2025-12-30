import { useRef, useState } from "react";
import "./StateTodo.css"


export default function StateTodo(){
    const maxId=useRef(0);

    const [title,setTitle] = useState("");
    const [todo,setTodo] = useState([]);
    const [desc,setDesc] = useState(true);
    const handleExchangeTitle= e => {
        setTitle(e.target.value);
    };

    const handleClick = e =>{
        setTodo([
            ...todo,
            {
                id: maxId.current++,
                title,
                created: new Date(),
                isDone: false
            }
        ]);
        setTitle("");
    };
    const handleDone = e =>{
        setTodo(
            todo.map(item =>{
                if(item.id === Number(e.target.dataset.id) ){
                    return {
                        ...item,
                        isDone:!item.isDone
                    };
                }else{
                    return item;
                }
            })
        )
    }
    const handleRemove = e =>{
        setTodo(
            todo.filter(item=>
                item.id !== Number(e.target.dataset.id)
            ));
    }
    const handleSort = e=>{
        const sorted = [...todo];
        sorted.sort((m,n)=>{
            if(desc){
                return n.created.getTime() - m.created.getTime();
            }else{
                return m.created.getTime() - n.created.getTime();
            }
        })
        setDesc(d=>!d);
        setTodo(sorted);
    }
    return (
        <div>
            <label htmlFor="title">やること</label>
            <input id="title" type="text" name="title" value={title} onChange={handleExchangeTitle}/>
            <button type="button" onClick={handleClick}>追加</button>
            <button type="button" onClick={handleSort}>ソート({desc?"↑":"↓"})</button>
            <ul>
                {todo.map(item => (
                    <li key={item.id} className={item.isDone?"done":""}>{item.title}
                    <button type="button" data-id={item.id} onClick={handleDone}>済</button>
                    <button type="button" data-id={item.id} onClick={handleRemove}>削除</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}