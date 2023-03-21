import {Request, Response} from 'express'
import {produtos} from '../produtoData'
import {Produto} from '../model/Produto'
import {ValorProduto} from '../model/ValorProduto'
import {writeFile, readFile} from 'fs/promises'

let p = new Produto()
let v = new ValorProduto()

class ProdutoController {

    public async makeProduto(req: Request, res: Response){
        p.writeProdutos()
        return res.json('Feito')
    }

    public async findProduto(req: Request, res: Response){
        return res.json(produtos)
    }

    public async makeStockProduto(req: Request, res: Response){
        v.insertPrecoProdutos()
        return res.json('Feito')
    }

    public async findStockProduto(req: Request, res: Response){
        return res.json(v.readValorProdutosDataSorce())
    }
}

export default new ProdutoController()