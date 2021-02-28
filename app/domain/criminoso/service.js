const criminosoRepository = require('./repository')

class CriminosoService{
    constructor(){
        this.repository = criminosoRepository
        this.save = this.save.bind(this)
        this.findAll = this.findAll.bind(this)
        this.findById = this.findById.bind(this)
        this.remove = this.remove.bind(this)
    }

    save(criminoso){
        this.repository.save(criminoso)
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

module.exports = new CriminosoService()
