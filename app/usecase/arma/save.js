const service = require('../../domain/arma/service')

class SaveUseCase{
    constructor(){
        this.service = service
        this.execute = this.execute.bind(this)
    }

    execute(arma){
        this.service.save(arma)
    }
}

module.exports = new SaveUseCase()