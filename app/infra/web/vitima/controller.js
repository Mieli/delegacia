class VitimaController{

    form(req, res){
        res.render('vitima/form.html')
    }

    listar(req, res){
        res.render('vitima/list.html')
    }

}

module.exports = new VitimaController()