
class VitimaRepository {

    constructor() {
        this.vitimas = [
            { id: 1, nome: "Maria das Graças", cpf:"123555888996", telefone: "48996325656", email:"mariagraca@gmail.com" },
            { id: 2, nome: "Pedro Amorin", cpf:"888999666555", telefone: "58933665588", email:"pedro@gmail.com" },
            { id: 3, nome: "Guilherme de Alencar", cpf:"987987987987", telefone: "88996354875", email:"guilherme@gmail.com" },
            { id: 4, nome: "Marcos Vinícios de Moraes", cpf:"753852654951", telefone: "8988659586", email:"marcos@gmail.com" },
           
        ]

        this.save = this.save.bind(this)
        this.insert = this.insert.bind(this)
        this.update = this.update.bind(this)
        this.remove = this.remove.bind(this)
        this.findAll = this.findAll.bind(this)
        this.findById = this.findById.bind(this)

    }

    save(vitima) {
        if (!vitima.id) {
            this.insert(vitima)
        } else {
            this.update(vitima)
        }
    }

    insert(vitima){
        vitima.id = new Date().getTime()
        this.vitimas.push(vitima)
    }

    update(vitima){
        return this.vitimas.forEach(item => {
            if(item.id === vitima.id){
                item.nome = vitima.nome
                item.cpf = vitima.cpf
                item.telefone = vitima.telefone
                item.email = vitima.email
            }
        })
    }

    remove(id){
        this.vitimas = this.vitimas.filter(vitima => vitima.id != id)
    }

    findAll() {
        return this.vitimas
    }

    findById(id){
        if(id){
            return this.vitimas.find(element => element.id == id)
        }
        return null
    }

}

module.exports = new VitimaRepository()