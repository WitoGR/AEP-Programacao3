import {writeFile, readFile} from 'fs/promises'
import { Schema, model, Document } from 'mongoose'
import {produtos} from './../produtoData'
import {valores} from './../produtoValorData'


const ValorSchema = new Schema({
    nome: String,
    qtde: String,
    preco: String,
    valor_estoque: String
}, {
    timestamps: true
})

export class ValorProduto{
    private dataSorce = produtos
    private valoresSorce = valores

    public async writePrecoProdutos(){
        console.log('entrou') 
        try{
            writeFile('produtoValoresDataSource.json', JSON.stringify(this.valoresSorce))   
            console.log('entrou') 
        }
        catch(err)
        {
            console.error('erro ao criar o arquivo')
        }
    }

    public async insertPrecoProdutos(){
        this.dataSorce.forEach(pro => {
            let valor_estoque = pro.preco * pro.qtde
            writeFile.apply('produtoValoresDataSource.json',JSON.parse({"nome":pro.nome,"qtde": pro.qtde,"preco":pro.preco,"valor_estoque":valor_estoque}))
        });   
    }
}

export default model('valor', ValorSchema)
