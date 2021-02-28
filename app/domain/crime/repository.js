
class CrimeRepository {

    constructor() {
        this.crimes = [
            { id: 1, description: "Assalto a mão armada", data:"02/02/2021", logradouro: "Rua Americana, nr 300", bairro:"Centro" },
            { id: 2, description: "Briga com porrete", data:"01/01/2021", logradouro: "Rua Dom Pedro, nr 2800", bairro:"Garcia"},
            { id: 3, description: "Roubo de carro", data:"12/01/2021", logradouro: "Rua das Oliveiras, nr 180", bairro:"Pitangueiras"},
        ]

        this.save = this.save.bind(this)
        this.insert = this.insert.bind(this)
        this.update = this.update.bind(this)
        this.remove = this.remove.bind(this)
        this.findAll = this.findAll.bind(this)
        this.findById = this.findById.bind(this)

    }

    save(crime) {
        if (!crime.id) {
            this.insert(crime)
        } else {
            this.update(crime)
        }
    }

    insert(crime){
        crime.id = new Date().getTime()
        this.crimes.push(crime)
    }

    update(crime){
        return this.crimes.forEach(item => {
            if(item.id === crime.id){
                item.description = crime.description
                item.data = crime.data
                item.logradouro = crime.logradouro
                item.bairro = crime.bairro
            }
        })
    }

    remove(id){
        this.crimes = this.crimes.filter(crime => crime.id != id)
    }

    findAll() {
        return this.crimes
    }

    findById(id){
        if(id){
            return this.crimes.find(element => element.id == id)
        }
        return null
    }

}

module.exports = new CrimeRepository()