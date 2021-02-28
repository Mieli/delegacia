const service = require('../../domain/bairro/service')

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