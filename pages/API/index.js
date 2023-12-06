import { useState } from "react";

import Link from "next/link";
import Sobre from "./sobre";
function Home(){
    return( 
        <>
        <a>Acessar página Sobre</a><div>

            <h1>Home</h1>
            <Contador /></div>
            </>
            
    ) 
}

function Contador(){
    const [contador,setContador]=useState(1);
    function adicionarContador(){
        setContador(contador+1);
    }
    return(
        <div>
        <div>{contador}</div>
        <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

export default Home 