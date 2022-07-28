import { useState, useEffect } from 'react';
import { getAllWorldsService } from '../services/world.services';
import WorldCard from '../components/WorldCard';


function RackPage() {
    const [worlds, setWorlds] = useState([]);
    const [loading, setLoading] = useState(true);

    const getAllWorlds = async () => {
        // Send the token through the request "Authorization" Headers
        try {
            const response = await getAllWorldsService();
            setWorlds(response.data);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    };

    // We set this effect will run only once, after the initial render
    // by setting the empty dependency array - []
    useEffect(() => {
        getAllWorlds();
    }, []);

    return (
        <div className="P">
            {loading && <div>Loading...</div>}
            {!loading && worlds?.map((world) => <WorldCard key={world._id} {...world} />)}
        </div>
    );
}

// { <AddProject /> }
/* <AddWorld /> */ 
/* {refreshProjects={getAllProjects} } */ 


export default RackPage;