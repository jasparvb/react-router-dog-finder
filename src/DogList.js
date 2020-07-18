import React from "react";
import { Link } from "react-router-dom";


function DogList({dogs}) {
    return (
        <div className="DogList">
            {dogs.map((dog, i) => 
                <Link key={i} to={`/dogs/${dog.name.toLowerCase()}`}>
                    <div>
                        <p>{dog.name}</p>
                        <img src={dog.src}/>
                    </div>
                </Link>
            )}
        </div>
    );
}

export default DogList;