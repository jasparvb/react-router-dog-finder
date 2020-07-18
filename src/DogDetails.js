import React from "react";
import { useParams, Redirect } from "react-router-dom";

function DogDetails({dogs}) {
    const { name } = useParams();
    const dog = dogs.find(dog => dog.name.toLowerCase() === name);
    
    if (!dog) return <Redirect to="/dogs"/>

    return (
        <div className="DogDetails">
            <h1>{dog.name}</h1>
            <p>Age: {dog.age}</p>
            <img src={dog.src}/>
            <ul>
                {dog.facts.map((fact, i) => <li key={i}>{fact}</li>)}
            </ul>
        </div>
    );
}

export default DogDetails;