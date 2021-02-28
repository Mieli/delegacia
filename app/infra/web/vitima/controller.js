const { 
    SaveUseCase,
    FindAllUseCase,
    FindByIdUseCase,
    RemoveUseCase 
 } = require('../../../usecase/vitima')

class VitimaController{

    form(req, res){
        const id = parseInt(req.query.id) || 'novo'
        let vitima = null
        if(id && id !== 'novo'){
            vitima = FindByIdUseCase.execute(id)
        }
        res.render('vitima/form.html', {vitima})
    }

    listar(req, res){
        const vitimas = FindAllUseCase.execute()
        res.render('vitima/list.html', {vitimas})
    }


    cadastrar(req, res){
        let {id, nome, cpf, telefone, email} = req.body
        id = parseInt(id)
        const vitima = {
            id,
            nome,
            cpf, 
            telefone, 
            email
        }
        SaveUseCase.execute(vitima)
        res.redirect('/vitima/listar')
    }
    remove(req, res){
        const id = parseInt(req.params.id)
        RemoveUseCase.execute(id)
        res.redirect('/vitima/listar')
    }

}

module.exports = new VitimaController()