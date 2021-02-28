class EstadoController{
    form(req, res){
        res.render('estado/form.html')
    }

    listar(req, res){
        res.render('estado/list.html')
    }
}

module.exports = new EstadoController()