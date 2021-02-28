const {
    FindAllUseCase,
    FindByIdUseCase,
    SaveUseCase,
    RemoveUseCase
} = require('../../../usecase/criminoso')

class CriminosoController{
    form(req, res){
        const id = parseInt(req.query.id) || 'novo'
        let criminoso = null
        if(id && id !== 'novo'){
            criminoso = FindByIdUseCase.execute(id)
        }
        res.render('criminoso/form.html', {criminoso})
    }
    listar(req, res){
        const criminosos = FindAllUseCase.execute()
        res.render('criminoso/list.html', {criminosos})
    }

    cadastrar(req, res){
        let {id, nome, cpf} = req.body
        id = parseInt(id)
        const criminoso = {
            id,
            nome,
            cpf
        }
        SaveUseCase.execute(criminoso)
        res.redirect('/criminoso/listar')
    }

    remove(req, res){
        const id = parseInt(req.params.id)
        RemoveUseCase.execute(id)
        res.redirect('/criminoso/listar')
    }
}

module.exports = new CriminosoController()