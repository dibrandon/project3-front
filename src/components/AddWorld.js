import { useState } from 'react';
import { addNewWorldService } from '../services/world.services';
import Form from 'react-bootstrap/Form';


function AddWorld(props) {
    const [nombre, setNombre] = useState("");
    const [breveDescripcion, setBreveDescripcion] = useState("")
    const [descripcionFull, setDescripcionFull] = useState("")
    const [rpgSystem, setRpgSystem] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault();

        const newWorld = { nombre, breveDescripcion, descripcionFull, rpgSystem };

        //token request Authorization
        try {
            await addNewWorldService(newWorld);
            setNombre("");
            setBreveDescripcion("")
            setDescripcionFull("")
            setRpgSystem("")
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <div className="container">
        

            <form className="rack-container" onSubmit={handleSubmit}>
            <h2>Nombre de tu nuevo mundo</h2>

                <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control size="sm" type="text" placeholder="Nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Breve reseña</Form.Label>
                    <Form.Control as="textarea" rows={3} name="breveDescripcion" value={breveDescripcion}
                    onChange={(e) => setBreveDescripcion(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Su historia completa</Form.Label>
                    <Form.Control as="textarea" rows={30} name="descripcionFull" value={descripcionFull} onChange={(e) => setDescripcionFull(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Version Sistema RPG:</Form.Label>
                    <Form.Control size="sm" type="text" placeholder="Nombre" name="rpgSystem" value={rpgSystem} onChange={(e) => {
                    setRpgSystem(e.target.value)
                }} />
                </Form.Group>

                <button variant="dark" type="submit" >Agregar Mundo</button>

            </form>
        </div>
    );
};
export default AddWorld;