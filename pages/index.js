import { useState } from "react";

import Link from "next/link";
function Home(){
    return( 
        <>
        <Link><a>Acessar página Sobre</a></Link><div>

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