import { useState, useEffect } from "react";
import CatCard from "./CatCard";

export default function CatFeed(){
    const [cat,setCat] = useState([]);
    const [cats,setCats] = useState([]);
useEffect(() => {
    const iterate = () => {
        for(let i =0; i <10 ; i++){
            fetch("https://cataas.com/cat",
            {
                method: "GET",
                headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                }
            })
            .then((res) => res.json())
            .then((data) => setCat(data));
            console.log(cat)
            setCats(prevCats => [...prevCats, cat]); 
            setCat('');
        }   
    }
  
    }, [cats]);

    return(
        <>
        {
            cats.map((catVal)=> (
                <CatCard Card={catVal}/>
            ))
        }
        
        </>
    );
}