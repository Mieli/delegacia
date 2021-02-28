const service = require('../../domain/tipo-arma/service')

class SaveUseCase{
    constructor(){
        this.service = service
        this.execute = this.execute.bind(this)
    }

    execute(bairro){
        this.service.save(bairro)
    }
}

module.exports = new SaveUseCase()