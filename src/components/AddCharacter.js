import { useState } from 'react';
import { addNewCharacterService } from "../services/character.services";


function AddCharacter(props) {
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState("");
    const [religion, setReligion] = useState("")
    const [genero, setGenero] = useState("")
    const [profesionPadres, setProfesionPadres] = useState("")
    const [profesionAventurero, setProfesionAventurero] = useState("")
    const [origen, setOrigen] = useState("")
    const [contenido, setContenido] = useState("")
    const [infoLateral, setInfoLateral] = useState("")



    const handleSubmit = async (e) => {
        e.preventDefault();

        const newCharacter = {nombre, edad, religion, genero, profesionPadres, profesionAventurero, origen, contenido, infoLateral};

        //token request Authorization
        try {
            await addNewCharacterService(newCharacter);
            setNombre("");
            setEdad("")
            setReligion("")
            setGenero("");
            setProfesionPadres("")
            setProfesionAventurero("")
            setOrigen("");
            setContenido("")
            setInfoLateral("")
        } catch (err) {
            console.log(err)
        }
    }


return (
    <div>
        <h2>Nombre de tu nuevo personaje</h2>

        {/* <form onSubmit={handleSubmit}>

        <label>Nombre:</label>
        <input type="text" name="nombre" value={nombre} onChange = {(e)=>setNombre(e.target.value)} />

            <label>Una breve descripcion:</label>
            <textarea type="text" name="breveDescripcion" value = {breveDescripcion}
             onChange={(e) => setBreveDescripcion(e.target.value)}/>
        
        <label>Sistema RPG:</label>
        <input type="text" name="rpgSystem" value={rpgSystem} onChange = {(e)=>{
            setRpgSystem(e.target.value)}} />

        <button type="submit">Agregar Mundo</button>

        </form> */}
    </div>
);
};
export default AddCharacter;