const service = require('../../domain/criminoso/service')

class SaveUseCase{
    constructor(){
        this.service = service
        this.execute = this.execute.bind(this)
    }

    execute(criminoso){
        this.service.save(criminoso)
    }
}

module.exports = new SaveUseCase()