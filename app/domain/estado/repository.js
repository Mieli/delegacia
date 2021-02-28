class EstadoRepository{
    constructor(){
        this.estados = [
            {id:1, sigla:"SP", nome:"São Paulo"},
            {id:2, sigla:"SC", nome:"Santa Catarina"},
            {id:3, sigla:"PR", nome:"Paraná"},
            {id:4, sigla:"MG", nome:"Minas Gerais"},
        ]

        this.save = this.save.bind(this)
        this.insert = this.insert.bind(this)
        this.update = this.update.bind(this)
        this.remove = this.remove.bind(this)
        this.findAll = this.findAll.bind(this)
        this.findById = this.findById.bind(this)
    }

    findAll(){
        return this.estados
    }

    findById(id){
        if(id){
            return this.estados.find(element => element.id == id)
        }
        return null
    }

    save(estado){
        if(!estado.id){
            this.insert(estado)
        }else{
            this.update(estado)
        }
    }

    insert(estado){
        estado.id = new Date().getTime()
        this.estados.push(estado)
    }

    update(estado){
        return this.estados.forEach(item => {
            if (item.id == estado.id){
                item.sigla = estado.sigla
                item.nome = estado.nome
            }
        })
    }

    remove(id){
        if(id){
            this.estados = this.estados.filter(item => item.id != id)
        }
        return null
    }


}

module.exports = new EstadoRepository()