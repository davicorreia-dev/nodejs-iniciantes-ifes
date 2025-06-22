import { Injectable } from '@nestjs/common';
import Cliente from './modelo/cliente';

@Injectable()
export class AppService {
  //Array de Clientes
  private listaClientes: Array<Cliente> = [];

  constructor() {
    const client1 = new Cliente(1, 'Alice Almeida', 'alice@teste.com.br', 2010);
    const client2 = new Cliente(2, 'Carlos Alberto', 'carlos@teste.com.br', 2007);
    const client3 = new Cliente(3, 'Alice Almeida', 'teste1@gmail.com', 2003);

    //Adiciona os objetos ao array
    this.listaClientes.push(client1, client2, client3);
  }

  public listarTodos(): Array<Cliente> {
    return this.listaClientes;
  }

  public buscarPorId(id: number): Cliente {
    const cliente = this.listaClientes.find(
      (cliente: Cliente) => cliente.id === id,
    );

    if (!cliente) {
      throw new Error(`Cliente com id ${id} não encontrado.`);
    }

    return cliente;
  }

  public salvar(cliente: Cliente): Cliente {
    console.log(cliente);

    //Cria um novo registro
    const incluirCliente = new Cliente(
      this.obterProximoId(),
      cliente.nome,
      cliente.email,
      cliente.anoNascimento,
    );

    this.listaClientes.push(incluirCliente);
    console.log(incluirCliente);
    return incluirCliente;
  }

  public atualizar(id: number, cliente: Cliente): Cliente {
    //Encontra o índice do registro que será atualizado
    const indice = this.listaClientes.findIndex((cliente) => cliente.id == id);

    //Atualiza o registro
    this.listaClientes[indice] = cliente;
    return cliente;
  }

  public excluir(id: number): void {
    //Encontra o índice do registro que será excluído
    const indice = this.listaClientes.findIndex((cliente) => cliente.id == id);

    //Remove o registro do Array
    this.listaClientes.splice(indice, 1);
  }

  public obterProximoId(): number {
    if (this.listaClientes.length == 0) {
      return 1;
    } else {
      //Obtém o último registro do Array
      const ultimoRegistro = this.listaClientes[this.listaClientes.length - 1];

      //Incrementa o identificador
      //para ser usado um novo registro
      return ultimoRegistro.id + 1;
    }
  }
}
