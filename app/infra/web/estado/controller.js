const {
    FindAllUseCase,
    FindByIdUseCase,
    SaveUseCase,
    RemoveUseCase
} = require('../../../usecase/cidade')

class EstadoController{
    form(req, res){
        const id = parseInt(req.query.id) || 'novo'
        let estado = null
        if(id && id!= 'novo'){
            estado = FindByIdUseCase.execute(id)
        }
        res.render('estado/form.html', {estado})
    }

    listar(req, res){
        const estados = FindAllUseCase.execute()
        res.render('estado/list.html', {estados})
    }

    cadastrar(req, res){
        let {id, nome, sigla } = req.body
        id = parseInt(id)
        const estado = {
            id,
            nome,
            sigla
        }
        SaveUseCase.execute(estado)
        res.redirect('/estado/listar')
    }

    remove(req, res){
        const id = parseInt(req.params.id)
        RemoveUseCase.execute(id)
        res.redirect('/estado/listar')
    }

}

module.exports = new EstadoController()