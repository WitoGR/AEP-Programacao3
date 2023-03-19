import {Request, Response} from 'express'
import {produtos} from '../produtoData'
import {Produto} from '../model/Produto'
import valor from '../model/ValorSchema'
import {writeFile, readFile} from 'fs/promises'
import {ValorProduto} from '../model/ValorSchema'

let p = new Produto()
let v = new ValorProduto()

class ProdutoController {

    public async makeProduto(req: Request, res: Response){
        //p.writeProdutos
        
        return res.json('Feito')
    }

    public async findProduto(req: Request, res: Response){
        return res.json(produtos)
    }

    public async makeStockProduto(req: Request, res: Response){
        v.writePrecoProdutos
        return res.json('Feito')
    }

    public async findStockProduto(req: Request, res: Response){
        v.insertPrecoProdutos
        let leProduto = readFile('produtoValoresDataSorce.json','utf-8')
        return res.json(leProduto)
    }

    public async insertIntoStockProduto(req: Request, res: Response){
        v.insertPrecoProdutos
        let leProduto = readFile('produtoValoresDataSorce.json','utf-8')
        return res.json(leProduto)
    }
}

export default new ProdutoController()