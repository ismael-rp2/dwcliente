import {useState} from 'react';
import './ContadorLikes.css';

const ContadorLikes = ()=>  {
    const [contadorLikes, setContadorLikes] = useState(0);
    const [contadorDislikes, setContadorDislikes] = useState(0);

    const incrementarLikes = () => {
        setContadorLikes(contadorLikes + 1);
    };

    const incrementarDislikes = () => {
        setContadorDislikes(contadorDislikes + 1);
    };

    return (
    <>  
        <div>
            <h2>Likes en total: {contadorLikes}</h2>
            <button onClick={incrementarLikes}>Like</button>
        </div>

        <div>
            <h2>Dislikes en total: {contadorDislikes}</h2>
            <button onClick={incrementarDislikes}>Dislike</button>
        </div>
    </>
  );

};

export default ContadorLikes
