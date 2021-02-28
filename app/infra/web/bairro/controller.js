class BairroController{
    form(req, res){
        res.render('bairro/form.html')
    }
    listar(req, res){
        res.render('bairro/list.html')
    }
}

module.exports = new BairroController()