function tempo(request, response){
    const dynamicDate = new Date();

    response.json({
        date: dynamicDate.toGMTSctring() 

    })
}

export default tempo;