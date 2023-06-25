import Route from '@ioc:Adonis/Core/Route'

Route.resource('/auth', 'Auth/MainController') //Faz o registro de todas as rotas de um controller
  .only(['store', 'destroy']) //Especifica quais rotas serão registradas
  .middleware({
    //Especifica quais middlewares serão aplicados nas rotas
    destroy: ['auth'], //O middleware 'auth' será aplicado na rota 'destroy'
  })
