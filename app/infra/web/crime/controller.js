const { 
    SaveUseCase,
    FindAllUseCase,
    FindByIdUseCase,
    RemoveUseCase 
 } = require('../../../usecase/crime')

class CrimeController{
    form(req, res){
        const id = parseInt(req.query.id) || 'novo'
        let crime = null
        if(id && id !== 'novo'){
            crime = FindByIdUseCase.execute(id)
        }
        res.render('crime/form.html', {crime})
    }
    listar(req, res){
        const crimes = FindAllUseCase.execute()
        res.render('crime/list.html', { crimes })
    }

    cadastrar(req, res){
        let {id, description, date, logradouro, bairro} = req.body
        id = parseInt(id)
        const crime = {
            id,
            description,
            date, 
            logradouro, 
            bairro
        }
        SaveUseCase.execute(crime)
        res.redirect('/crime/listar')
    }
    remove(req, res){
        const id = parseInt(req.params.id)
        RemoveUseCase.execute(id)
        res.redirect('/crime/listar')
    }
}

module.exports = new CrimeController()