import React from "react";
import { useParams } from "react-router-dom";

function DogDetails({dogs}) {
    const { name } = useParams();
    const [dog] = dogs.filter(dog => dog.name.toLowerCase() === name);
     
    return (
        <div className="DogDetails">
            <h1>{dog.name}</h1>
            <p>Age: {dog.age}</p>
            <img src={dog.src}/>
            <ul>
                {dog.facts.map(fact => <li>{fact}</li>)}
            </ul>
        </div>
    );
}

export default DogDetails;