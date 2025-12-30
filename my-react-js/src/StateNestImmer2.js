export default function StateNestImmer2 = () =>{
        const [form,setForm] = useImmer({
            name: "yamada Tarou",
            address: {
                prefecture:"Hiroshima",
                city: "kasiwabara"
            }
        });
        const handleFormNest= e =>{
            
        }
}