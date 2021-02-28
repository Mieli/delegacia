const tipoArmaRepository = require('./repository')

class TipoArmaService{
    constructor(){
        this.repository = tipoArmaRepository
        this.save = this.save.bind(this)
        this.findAll = this.findAll.bind(this)
        this.findById = this.findById.bind(this)
        this.remove = this.remove.bind(this)
    }

    save(tipo){
        this.repository.save(tipo)
    }

    findAll(){
       return this.repository.findAll()
    }

    findById(id){
        return this.repository.findById(id)
    }

    remove(id){
        this.repository.remove(id)
    }

}

module.exports = new TipoArmaService()