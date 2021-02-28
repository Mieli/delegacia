const service = require('../../domain/crime/service')

class FindAllUseCase{
    constructor(){
        this.service = service
        this.execute = this.execute.bind(this)
    }

    execute(){
        return this.service.findAll()
    }
}

module.exports = new FindAllUseCase()