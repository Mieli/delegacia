class CrimeController{
    form(req, res){
        res.render('crime/form.html')
    }
    listar(req, res){
        res.render('crime/list.html')
    }
}

module.exports = new CrimeController()