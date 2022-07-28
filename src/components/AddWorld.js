import { useState } from 'react';
import { addNewWorldService } from '../services/world.services';


function AddWorld(props) {
    const [nombre, setNombre] = useState("");
    const [breveDescripcion, setBreveDescripcion] = useState("")
    const [rpgSystem, setRpgSystem] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault();

        const newWorld = {nombre, breveDescripcion, rpgSystem};

        //token request Authorization
        try {
            await addNewWorldService(newWorld);
            setNombre("");
            setBreveDescripcion("")
            setRpgSystem("")
        } catch (err) {
            console.log(err)
        }
    }


return (
    <div>
        <h2>Nombre de tu nuevo mundo</h2>

        <form onSubmit={handleSubmit}>

        <label>Nombre:</label>
        <input type="text" name="nombre" value={nombre} onChange = {(e)=>setNombre(e.target.value)} />

            <label>Una breve descripcion:</label>
            <textarea type="text" name="breveDescripcion" value = {breveDescripcion}
             onChange={(e) => setBreveDescripcion(e.target.value)}/>
        
        <label>Sistema RPG:</label>
        <input type="text" name="rpgSystem" value={rpgSystem} onChange = {(e)=>{
            setRpgSystem(e.target.value)}} />

        <button type="submit">Agregar Mundo</button>

        </form>
    </div>
);
};
export default AddWorld;