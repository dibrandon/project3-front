import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';


//deconstructing props directly in the parentheses of the function

function ButtonList({ nombre, breveDescripcion, descripcionFull, _id }) {
    const [open, setOpen] = useState(false);

    return (
        <div className = "rack-buttons">
      <div className="d-grid gap-2">
        <Button variant="dark" size="sm"
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          {nombre}
        </Button>
        <Collapse in={open}>
          <div className="rack-container" id="example-collapse-text">
            <h4>Breve descripcion del mundo: {nombre}  </h4>
            <p>{breveDescripcion}</p>
            <h3>Descripcion completa:</h3>
            <p>{descripcionFull}</p>
          </div>
        </Collapse>
        </div>
        </div>
    );
  }
  
export default ButtonList;


