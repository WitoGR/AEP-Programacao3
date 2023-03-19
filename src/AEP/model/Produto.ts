import {writeFile, readFile} from 'fs/promises'
import {produtos} from './../produtoData'
import { Schema, model, Document } from 'mongoose'
import valor from '../model/ValorSchema'

const ProdutoSchema = new Schema({
    nome: String,
    qtde: Number,
    preco: Number,
    data_compra: Date,
    data_entrega: Date
},{
    timestamps : true
})

export class Produto {
    private dataSorce = produtos

    public async getDataSource(){
        return this.dataSorce
    }

    public async writeProdutos(){
        try{
            writeFile('produtoDataSource.json', JSON.stringify(this.dataSorce))
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

export default model('Produto', ProdutoSchema)
