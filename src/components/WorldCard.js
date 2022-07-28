import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';



function WorldCard({ title, _id }) {
    return (
        <div className="">

            <ButtonGroup vertical>
                <Button>{title}</Button>
            </ButtonGroup>
        </div>
    );
}

export default WorldCard;
