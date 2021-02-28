class TipoArmaController{
    form(req, res){
        res.render('tipo_arma/form.html')
    }

    listar(req, res){
        res.render('tipo_arma/list.html')
    }
}

module.exports = new TipoArmaController()