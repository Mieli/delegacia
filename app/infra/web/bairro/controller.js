const {
    FindAllUseCase,
    FindByIdUseCase,
    SaveUseCase,
    RemoveUseCase
} = require('../../../usecase/bairro')

class BairroController{
    form(req, res){
        const id = parseInt(req.query.id) || 'novo'
        let bairro = null
        if(id && id !== 'novo'){
            bairro = FindByIdUseCase.execute(id)
        }
        res.render('bairro/form.html', {bairro})
    }
    listar(req, res){
        const bairros = FindAllUseCase.execute()
        res.render('bairro/list.html', {bairros})
    }

    cadastrar(req, res){
        let {id, nome, cidade} = req.body
        id = parseInt(id)
        const bairro = {
            id,
            nome,
            cidade
        }
        SaveUseCase.execute(bairro)
        res.redirect('/bairro/listar')
    }

    remove(req, res){
        const id = parseInt(req.params.id)
        RemoveUseCase.execute(id)
        res.redirect('/bairro/listar')
    }


}

module.exports = new BairroController()