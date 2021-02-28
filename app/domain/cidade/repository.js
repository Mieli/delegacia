class CidadeRepository{
    constructor(){
        this.cidades = [
            {id:1, nome:"Blumenau", estado:"SC"},
            {id:2, nome:"Lins", estado:"SP"},
            {id:3, nome:"Curitiba", estado:"PR"},
            {id:4, nome:"Belo Horizonte", estado:"MG"},
        ]

        this.save = this.save.bind(this)
        this.insert = this.insert.bind(this)
        this.update = this.update.bind(this)
        this.remove = this.remove.bind(this)
        this.findAll = this.findAll.bind(this)
        this.findById = this.findById.bind(this)
    }

    findAll(){
        return this.cidades
    }

    findById(id){
        if(id){
            return this.cidades.find(element => element.id == id)
        }
        return null
    }

    save(cidade){
        if(!cidade.id){
            this.insert(cidade)
        }else{
            this.update(cidade)
        }
    }

    insert(cidade){
        cidade.id = new Date().getTime()
        this.cidades.push(cidade)
    }

    update(cidade){
        return this.cidades.forEach(item => {
            if(item.id == cidade.id){
                item.nome = cidade.nome
                item.estado = cidade.estado
            }
        })
    }

    remove(id){
        if(id){
            this.cidades.filter(cidade => cidade.id != id)
        }
        return null
    }

}

module.exports = new CidadeRepository()