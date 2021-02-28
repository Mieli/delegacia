const {
    FindAllUseCase,
    FindByIdUseCase,
    SaveUseCase,
    RemoveUseCase
} = require('../../../usecase/cidade')

class CidadeController{
    form(req, res){
        const id = parseInt(req.query.id) || 'novo'
        let cidade = null
        if(id && id !== 'novo'){
            cidade = FindByIdUseCase.execute(id)
        }
        res.render('cidade/form.html', {cidade})
    }
    listar(req, res){
        const cidades = FindAllUseCase.execute()
        res.render('cidade/list.html', {cidades})
    }
    cadastrar(req, res){
        let {id, nome, estado} = req.body
        id = parseInt(id)
        const cidade = {
            id, 
            nome, 
            estado
        }
        SaveUseCase.execute(cidade)
        res.redirect('/cidade/listar')
    }

    remove(req, res){
        const id = parseInt(req.params.id)
        RemoveUseCase.execute(id)
        res.redirect('/cidade/listar')
    }
}

module.exports = new CidadeController()