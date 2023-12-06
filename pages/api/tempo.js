function Tempo(props){
const dynamicDate= new Date();
const dynamicDateString= dynamicDate.toTimeString();

return( 
    <>
   <div>

        <h1>{dynamicDateString} (dinamico)</h1>
        <h1>{props.staticDateString} (estatico)</h1>
       </div>
        </>
        
)}

export function getStaticProps(){
    const staticDate= new Date();
    const staticDateString = staticDate.toGMTString();
    return {
        props:{
            staticDateString
        }

    }
        
    
}

export default Tempo