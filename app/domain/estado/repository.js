class EstadoRepository{
    constructor(){
        this.estados = [
            {id:1, sigla:"SP", nome:"São Paulo"},
            {id:1, sigla:"SC", nome:"Santa Catarina"},
            {id:1, sigla:"PR", nome:"Paraná"},
            {id:1, sigla:"MG", nome:"Minas Gerais"},
        ]

        this.save = this.save.bind(this)
        this.insert = this.insert.bind(this)
        this.update = this.update.bind(this)
        this.remove = this.remove.bind(this)
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
            this.estados.filter(item => item.id != id)
        }
        return null
    }


}

module.exports = new EstadoRepository()