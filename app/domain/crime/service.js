const crimeRepository = require('./repository')

class CrimeService{
    constructor(){
        this.repository = crimeRepository
        this.save = this.save.bind(this)
        this.findAll = this.findAll.bind(this)
        this.findById = this.findById.bind(this)
        this.remove = this.remove.bind(this)
    }

    save(crime){
        this.repository.save(crime)
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

module.exports = new CrimeService()