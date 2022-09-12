const jsonwebtoken = require("jsonwebtoken");



module.exports = (req, res, next) => {
    const { authorization } = req.headers

    const token = authorization?.split(' ')[1]
    console.log(token);
    try {
        const result = jsonwebtoken.verify(token, process.env.JWT_SECRET_TOKEN, {complete: true});
    }
    catch {
        return res.send("Token de autenticação invalido")
    }
    return next()
}