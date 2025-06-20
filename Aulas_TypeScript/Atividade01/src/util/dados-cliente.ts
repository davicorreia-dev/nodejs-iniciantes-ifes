import dados from '../dados/dados-clientes.json';
import Cliente from '../modelo/cliente';

export default class DadosCliente{

    public static dados():Array<Cliente>{

        //Converte os dados para uma string no formato JSON
        const json_para_string = JSON.stringify(dados);

        //Converte o JSON para uma lista de objetos genéricos
        const json_para_objeto = JSON.parse(json_para_string);

        //Array de Clientes
        const listaClientes:Array<Cliente> = [];

        //Converte a lista de objetos genéricos para 
        //uma lista de objetos do tipo Cliente
        json_para_objeto.forEach( (element) => {

            //Vamos percorrer elemento por elemento 
            //e criar um objeto Cliente
            let cliente = new Cliente(element.id, element.nome, 
                element.email,element.ano_nacimento);

            //Adiciona o objeto Cliente ao array de Clientes
            listaClientes.push(cliente);
        });

        //Retorna a lista de objetos de clientes
        return listaClientes;
    }
}