import Cliente from './modelo/cliente';
import RepositorioClienteImpl from './repositorio/impl/repositorio-cliente-impl';

const repositorio = new RepositorioClienteImpl();

//Lista todos os registros existentes
console.log("-------- Listar dados ------");
console.log(repositorio.listarTodos());

//Cria um novo registro
const incluirCliente = new Cliente(
    repositorio.obterProximoId(), 
    "Marcelo Cavalcante",
    "marcelo@teste.com.br",
    2003
);

//Salva o registo
console.log("-------- Salvar Cliente ------");
repositorio.salvar(incluirCliente);
console.log(repositorio.listarTodos());

//Busca pelo ID
console.log("-------- Buscar por ID ------");
const buscaPesso = repositorio.buscarPorId(2);
console.log(buscaPesso);

//Atualizar registro
console.log("-------- Atualizar Registro ------");
buscaPesso.email = "novo_email@teste.com.br";
buscaPesso.anoNascimento = 2000;
repositorio.atualizar(buscaPesso.id, buscaPesso);
console.log(repositorio.listarTodos());

//Excluir registro
console.log("-------- Excluir Registro ------");
repositorio.excluir(2);
console.log(repositorio.listarTodos());