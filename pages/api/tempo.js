 function Tempo(request, response){
    const dynamicDate = new Date();
   return response.json({       
        dataAtual: dynamicDate.toGMTString()
    });
 
}

export default Tempo