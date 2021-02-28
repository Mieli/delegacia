class CriminosoRepository {
    constructor() {
        this.criminosos = [
            { id: 1, nome: "Mão de Luva", cpf: "123456789256" },
            { id: 2, nome: "Zé do Brejo", cpf: "456325789415" },
            { id: 3, nome: "Maria Louca", cpf: "789798465123" },
            { id: 4, nome: "João Maluco", cpf: "159753852654" },
        ]
        this.findAll = this.findAll.bind(this)
        this.findById = this.findById.bind(this)
        this.save = this.save.bind(this)
        this.update = this.update.bind(this)
        this.insert = this.insert.bind(this)
        this.remove = this.remove.bind(this)

    }

    findAll() {
        return this.criminosos
    }

    findById(id) {
        if(id){
            return this.criminosos.find(element => element.id == id)
        }
        return null
    }

    save(criminoso) {
        if (!criminoso.id) {
            this.insert(criminoso)
        } else {
            this.update(criminoso)
        }
    }

    insert(criminoso) {
        criminoso.id = new Date().getTime()
        this.criminosos.push(criminoso)
    }

    update(criminoso) {
        return this.criminosos.forEach(item => {
            if (item.id == criminoso.id) {
                item.nome = criminoso.nome
                item.cpf = criminoso.cpf
            }
        })
    }

    remove(id) {
        if (id) {
            this.criminosos = this.criminosos.filter(criminoso => criminoso.id != id)
        }
        return null
    }

}

module.exports = new CriminosoRepository()