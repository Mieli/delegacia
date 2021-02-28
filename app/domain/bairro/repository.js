class BairroRepository {
    constructor() {
        this.bairros = [
            { id: 1, nome: "Garcia", cidade: "Blumenau" },
            { id: 2, nome: "Centro", cidade: "São Paulo" },
            { id: 3, nome: "Maria Luiza", cidade: "Curitiba" },
            { id: 4, nome: "Ribeirão", cidade: "Porto Alegre" },
        ]
        this.findAll = this.findAll.bind(this)
        this.findById = this.findById.bind(this)
        this.save = this.save.bind(this)
        this.update = this.update.bind(this)
        this.insert = this.insert.bind(this)
        this.remove = this.remove.bind(this)

    }

    findAll() {
        return this.bairros
    }

    findById(id) {
        if(id){
            return this.bairros.find(element => element.id == id)
        }
        return null
    }

    save(bairro) {
        if (!bairro.id) {
            this.insert(bairro)
        } else {
            this.update(bairro)
        }
    }

    insert(bairro) {
        bairro.id = new Date().getTime()
        this.bairros.push(bairro)
    }

    update(bairro) {
        return this.bairros.forEach(item => {
            if (item.id == bairro.id) {
                item.nome = bairro.nome
                item.cidade = bairro.cidade
            }
        })
    }

    remove(id) {
        if (id) {
            this.bairros = this.bairros.filter(bairro => bairro.id != id)
        }
        return null
    }

}

module.exports = new BairroRepository()