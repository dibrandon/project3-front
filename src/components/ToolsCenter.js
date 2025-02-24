import { Link } from 'react-router-dom';
import iconWorld from "../images/addWorld.png"
import iconCharacter from "../images/addCharacter.png"

function ToolsCenter() {
	return (
        <div className = "container">
		<div className="tools">
            <img id="addWorld" src = {iconWorld} alt = "acceso a crear mundo" ></img>
			<Link to={"/addWorld"}>
				<h3>Mundo</h3>
			</Link>
		</div>
        <div className="tools">
        <img id="addWorld" src = {iconCharacter} alt = "acceso a crear personaje" ></img>
        <Link to={"/addCharacter"}>
            <h3>Personaje</h3>
        </Link>
    </div>
    </div>
	);
}

export default ToolsCenter;