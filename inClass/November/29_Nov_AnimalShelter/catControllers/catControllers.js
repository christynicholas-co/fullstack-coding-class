const getCats = (req, res) => {
    res.send ("You got some cats")
}

const getCat =(req,res) =>{
    let id = req.params.id
    res.send ("You got some cats")
}

module.exports= {
    getCats:getCats,
    getCat:getCat
}