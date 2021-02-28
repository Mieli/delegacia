const vitimaRepository = require('./repository')

class VitimaService{
    constructor(){
        this.repository = vitimaRepository
        this.save = this.save.bind(this)
        this.findAll = this.findAll.bind(this)
        this.findById = this.findById.bind(this)
        this.remove = this.remove.bind(this)
    }

    save(vitima){
        this.repository.save(vitima)
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

module.exports = new VitimaService()