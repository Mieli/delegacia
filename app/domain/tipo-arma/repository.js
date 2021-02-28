class TipoArmaRepository{
    constructor(){
        this.tipoArmas = [
            {id:1, description:"Arma de Fogo"},
            {id:2, description:"Arma Branca"},
            {id:3, description:"Diversos"},
        ]

        this.save = this.save.bind(this)
        this.insert = this.insert.bind(this)
        this.update = this.update.bind(this)
        this.remove = this.remove.bind(this)
        this.findAll = this.findAll.bind(this)
        this.findById = this.findById.bind(this)
    }

    findAll(){
        return this.tipoArmas
    }

    findById(id){
        if(id){
            return this.tipoArmas.find(element => element.id == id)
        }
        return null
    }

    save(tipo){
        if(!tipo.id){
            this.insert(tipo)
        }else{
            this.update(tipo)
        }
    }

    insert(tipo){
        tipo.id = new Date().getTime()
        this.tipoArmas.push(tipo)
    }

    update(tipo){
        return this.tipoArmas.forEach(item => {
            if (item.id == tipo.id){
                item.description = tipo.description
            }
        })
    }

    remove(id){
        if(id){
            this.tipoArmas = this.tipoArmas.filter(tipo => tipo.id != id)
        }
        return null
    }


}

module.exports = new TipoArmaRepository()