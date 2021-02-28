class CriminosoController{
    form(req, res){
        res.render('criminoso/form.html')
    }
    listar(req, res){
        res.render('criminoso/list.html')
    }
}

module.exports = new CriminosoController()