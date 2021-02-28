const service = require('../../domain/crime/service')

class SaveUseCase{
    constructor(){
        this.service = service
        this.execute = this.execute.bind(this)
    }

    execute(crime){
        this.service.save(crime)
    }
}

module.exports = new SaveUseCase()