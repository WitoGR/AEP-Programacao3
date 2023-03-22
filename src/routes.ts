// 16 - importamos a Classe Router do express
import { Router } from 'express'
import produtoController from './AEP/controller/ProdutoController'
import healthCheckController from './controller/healthCheckController'
import userController from './controller/userController'



// 17 - criamos uma constante que recebe o objeto Router
const routes = Router()

// 18 - executamos o método get de Router() , e passamos como parametro, o nome da rota que queremos criar
// e o método que deve ser executado quando esta rota for chamada
routes.get('/health-check', healthCheckController.check)
routes.get('/users', userController.findUser)
routes.post('/users', userController.createUser)
routes.get('/produtos', produtoController.findProduto)
routes.post('/produtos', produtoController.makeProduto)
routes.get('/produtos-stock', produtoController.findStockProduto)
routes.post('/produtos-stock', produtoController.makeStockProduto)
routes.get('/products-stock-reduce', produtoController.reduceStockProduto)

// 19 - exportar a constante routes
export default routes