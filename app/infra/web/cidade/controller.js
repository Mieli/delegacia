class CidadeController{
    form(req, res){
        res.render('cidade/form.html')
    }
    listar(req, res){
        res.render('cidade/list.html')
    }
}

module.exports = new CidadeController()