const cidadeRepository = require('./repository')

class CidadeService{
    constructor(){
        this.repository = cidadeRepository
        this.save = this.save.bind(this)
        this.findAll = this.findAll.bind(this)
        this.findById = this.findById.bind(this)
        this.remove = this.remove.bind(this)
    }

    save(bairro){
        this.repository.save(bairro)
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

module.exports = new CidadeService()