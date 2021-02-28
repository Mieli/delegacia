const service = require('../../domain/arma/service')

class FindByIdUseCase{
    constructor(){
        this.service = service
        this.execute = this.execute.bind(this)
    }

    execute(id){
        return this.service.findById(id)
    }
}

module.exports = new FindByIdUseCase()