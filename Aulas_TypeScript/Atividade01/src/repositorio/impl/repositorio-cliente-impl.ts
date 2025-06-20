import DadosCliente from "../../util/dados-cliente";
import IRepositorioCliente from "../repositorio-cliente";
import Cliente from "../../modelo/cliente";

export default class RepositorioClienteImpl implements IRepositorioCliente{
    
    //Array de Clientes
    private listaClientes:Array<Cliente> = [];
    
    constructor(){
        //Carrega as informações contidas no arquivo JSON
        this.listaClientes = DadosCliente.dados();
    }

    public listarTodos():Array<Cliente>{
        return this.listaClientes;
    }

    public buscarPorId(id:number): Cliente {
        return this.listaClientes.find(
            cliente => cliente.id == id
        );
    }

    public salvar(cliente:Cliente): void{
        this.listaClientes.push(cliente);
    }

    public atualizar(id:number, cliente:Cliente): void{
        //Encontra o índice do registro que será removido
        let indice = this.listaClientes.findIndex(
            cliente => cliente.id == id
        );

        //Atualiza o registro
        this.listaClientes[indice] = cliente;
    }

    public excluir(id:number): void{
        //Encontra o índice do registro que será removido
        let indice = this.listaClientes.findIndex(
            cliente => cliente.id == id
        );

        //Remove o registo do array
        this.listaClientes.splice(indice, 1);
    }

    //Apenas para simular a chave incremental do banco de dados
    //Retorna o próximo valor do identificado para que não 
    //haja duplicidade de identificadores
    public obterProximoId(): number{
        
        if(this.listaClientes.length == 0){
            return 1
        }else{
            //Obtém o último registro do array
            let ultimoRegistro = this.listaClientes[
                this.listaClientes.length - 1
            ];

            //Incrementa o identificador 
            //para ser usado um novo registro
            return ultimoRegistro.id + 1;
        }
    }
}