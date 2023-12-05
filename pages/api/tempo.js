function tempo(request, response){
    const dynamicDate = new Date();
    
    response.json({       
        dataAtual: dynamicDate.toGMTString()
    });
 
}

export default tempo;