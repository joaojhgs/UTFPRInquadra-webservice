module.exports = (req, res, next) => {
    const { authorization } = req.headers
    console.log(authorization);
    if(authorization){
        return next()
    }
    return res.json({ 
        message: 'Usuario não autenticado!'
    })
}