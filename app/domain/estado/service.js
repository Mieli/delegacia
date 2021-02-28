const estadoRepository = require('./repository')

class EstadoService{
    constructor(){
        this.repository = estadoRepository
        this.save = this.save.bind(this)
        this.findAll = this.findAll.bind(this)
        this.findById = this.findById.bind(this)
        this.remove = this.remove.bind(this)
    }

    save(estado){
        this.repository.save(estado)
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

module.exports = new EstadoService()