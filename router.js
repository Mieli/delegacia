const routes = [
    require('./app/infra/web/vitima/router'),
    require('./app/infra/web/arma/router'),
    require('./app/infra/web/tipo_arma/router'),
    require('./app/infra/web/estado/router'),
    require('./app/infra/web/cidade/router'),
    require('./app/infra/web/bairro/router'),
    require('./app/infra/web/criminoso/router'),
    require('./app/infra/web/crime/router'),
]

function configure(app){
    for (route of routes){
        route.config(app)
    }
}

module.exports = {
    configure
}