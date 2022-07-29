import { useState } from 'react';
import { addNewCharacterService } from "../services/character.services";
import Form from 'react-bootstrap/Form';


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

        const newCharacter = { nombre, edad, religion, genero, profesionPadres, profesionAventurero, origen, contenido, infoLateral };

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
        <div className="container">
        

            <form className="rack-container" onSubmit={handleSubmit}>
            <h2>Nombre del nuevo personaje</h2>

                <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Nombre:</Form.Label>
                    <Form.Control size="sm" type="text" placeholder="Nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Edad:</Form.Label>
                    <Form.Control size="sm" type="text" placeholder="Edad" name="edad" value={edad} onChange={(e) => setEdad(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Religion:</Form.Label>
                    <Form.Control size="sm" type="text" placeholder="Religion" name="religion" value={religion} onChange={(e) => setReligion(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Genero:</Form.Label>
                    <Form.Control size="sm" type="text" placeholder="Genero" name="genero" value={genero} onChange={(e) => setGenero(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Profesion de los Padres:</Form.Label>
                    <Form.Control size="sm" type="text" placeholder="Profesion de los Padres" name="profesionPadres" value={profesionPadres} onChange={(e) => setProfesionPadres(e.target.value)} />
                </Form.Group>


                <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Profesion del Aventurero:</Form.Label>
                    <Form.Control size="sm" type="text" placeholder="Profesion del Aventurero" name="profesionAventurero" value={profesionAventurero} onChange={(e) => setProfesionAventurero(e.target.value)} />
                </Form.Group>


                <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Origen:</Form.Label>
                    <Form.Control size="sm" type="text" placeholder="Origen" name="origen" value={origen} onChange={(e) => setOrigen(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Breve reseña:</Form.Label>
                    <Form.Control as="textarea" rows={3} name="infoLateral" value={infoLateral} onChange={(e) => setInfoLateral(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Su historia completa:</Form.Label>
                    <Form.Control as="textarea" rows={30} name="contenido" value={contenido} onChange={(e) => setContenido(e.target.value)} />
                </Form.Group>

                <button type="submit" variant="dark">Agregar Mundo</button>

            </form>
        </div>
    );
};
export default AddCharacter;