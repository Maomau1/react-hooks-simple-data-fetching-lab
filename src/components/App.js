// create your App component here
import React, {useState, useEffect} from 'react';

function App(){

    const[image, setImage]=useState(null);

    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(r=>r.json())
        .then(data=>{
            console.log(data)
            setImage(data.message)})    
    },[])
            if(!image){
                return <h2>Loading...</h2>
            }
    return(
               
        <div>
            <img src={image} alt="A Random Dog"/>
        </div>
    )
}

export default App