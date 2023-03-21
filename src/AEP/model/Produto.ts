import {writeFile, readFile} from 'fs/promises'
import {produtos} from './../produtoData'
import { Schema, model, Document } from 'mongoose'

export class Produto {
    private dataSorce = produtos

    public async getDataSource(){
        return this.dataSorce
    }

    public async writeProdutos(){
        try{
            writeFile('produtoDataSource.json', JSON.stringify(this.dataSorce, null, 2))
        }
        catch(er){
            console.error('falha ao gravar', er)
        }
    }

    public async readProdutosDataSorce(){
        const leProduto = readFile('produtoDataSource.json','utf-8')
        return leProduto
    }

}
