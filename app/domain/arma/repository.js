
class ArmaRepository {

    constructor() {
        this.armas = [
            { id: 1, description: "Revolver 38 polegadas", tipo: "Arma de Fogo" },
            { id: 2, description: "Faca", tipo: "Arma branca" },
            { id: 3, description: "Caco de Vidro", tipo: "Diverso" },
        ]

        this.save = this.save.bind(this)
        this.insert = this.insert.bind(this)
        this.update = this.update.bind(this)
        this.remove = this.remove.bind(this)
        this.findAll = this.findAll.bind(this)
        this.findById = this.findById.bind(this)

    }

    save(arma) {
        if (!arma.id) {
            this.insert(arma)
        } else {
            this.update(arma)
        }
    }

    insert(arma){
        arma.id = new Date().getTime()
        this.armas.push(arma)
    }

    update(arma){
        return this.armas.forEach(item => {
            if(item.id === arma.id){
                item.description = arma.description
                item.tipo = arma.tipo
            }
        })
    }

    remove(id){
        this.armas = this.armas.filter(arma => arma.id != id)
    }

    findAll() {
        return this.armas
    }

    findById(id){
        if(id){
            return this.armas.find(element => element.id == id)
        }
        return null
    }


}

module.exports = new ArmaRepository()