const service = require('../../domain/estado/service')

class RemoveUseCase{
    constructor(){
        this.service = service
        this.execute = this.execute.bind(this)
    }

    execute(id){
        return this.service.remove(id)
    }
}

module.exports = new RemoveUseCase()