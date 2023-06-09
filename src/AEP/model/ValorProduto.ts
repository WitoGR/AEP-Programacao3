import {writeFile, readFile} from 'fs/promises'
import { Schema, model, Document } from 'mongoose'
import {produtos} from '../produtoData'
import valores from '../../../produtoValoresDataSource.json'

export class ValorProduto{
    private dataSorce = produtos
    private valoresDataSource = valores

    public async getDataSource(){
        return this.dataSorce
    }

    public async insertPrecoProdutos(){
        const arr = new Array();
        
        this.dataSorce.forEach(pro => {
            let valor_estoque = pro.preco * pro.qtde
            let itens = {"nome":pro.nome,"qtde":pro.qtde,"preco":pro.preco,"valor_estoque":valor_estoque}
            arr.push(itens)    
        })

        writeFile('produtoValoresDataSource.json', JSON.stringify(arr, null, 2));
    }

    public async readValorProdutosDataSorce(){
        const leValor = await readFile('produtoValoresDataSource.json','utf-8')
        return leValor
    }

    public async findValorTotalStock(){
        const val = valores.reduce( (acc, atual)  => {
            acc.valor_estoque += atual.valor_estoque 
            return acc
        })

        return val.valor_estoque
    }
}
