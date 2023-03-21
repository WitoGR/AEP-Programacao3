import {writeFile, readFile} from 'fs/promises'
import { Schema, model, Document } from 'mongoose'
import {produtos} from '../produtoData'


export class ValorProduto{
    private dataSorce = produtos

    public async getDataSource(){
        return this.dataSorce
    }

    public async insertPrecoProdutos(){
        console.log("entrou")
        const arr = [{}];
        
        this.dataSorce.forEach(pro => {
            let valor_estoque = pro.preco * pro.qtde
            let itens = {"nome":pro.nome,"qtde":pro.qtde,"preco":pro.preco,"valor_estoque":valor_estoque}
            //let itens = [{"nome":pro.nome,"qtde":pro.qtde,"preco":pro.preco,"valor_estoque":valor_estoque}]
            arr.push(itens)    
        });     

        writeFile('produtoValoresDataSource.json', JSON.stringify(arr, null, 2));
    }

    public async readValorProdutosDataSorce(){
        const leValor = readFile('produtoValoresDataSource.json','utf-8')
        return leValor
    }
}
