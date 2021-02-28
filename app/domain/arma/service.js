const armaRepository = require('./repository')

class ArmaService{
    constructor(){
        this.repository = armaRepository
        this.save = this.save.bind(this)
        this.findAll = this.findAll.bind(this)
        this.findById = this.findById.bind(this)
        this.remove = this.remove.bind(this)
    }

    save(arma){
        this.repository.save(arma)
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

module.exports = new ArmaService()