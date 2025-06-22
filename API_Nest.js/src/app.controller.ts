import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import Cliente from './modelo/cliente';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() //Exemplo: http://localhost:3000
  getStatus(): string {
    return 'O servidor está rodando: ' + new Date();
  }

  @Get('/clientes') //Exemplo: http://localhost:3000/clientes
  listarTodosClicentes(): Array<Cliente> {
    console.log('Entrou no método: Listar todos os clientes ' + new Date());

    return this.appService.listarTodos();
  }

  @Get('/cliente') //Exemplo: http://localhost:3000?id=1
  public buscarPorId(@Query('id') id: number): Cliente {
    console.log('Entrou no método: Buscar por ID ' + new Date());

    return this.appService.buscarPorId(id);
  }

  @Post()
  public salvar(@Body() cliente: Cliente): Cliente {
    console.log('Entrou no método: Salvar');

    return this.appService.salvar(cliente);
  }

  @Put(':id')
  public alterar(@Param('id') id: number, @Body() cliente: Cliente): Cliente {
    console.log('Entrou no método: Alterar');

    return this.appService.atualizar(id, cliente);
  }

  @Delete(':id')
  public excluir(@Param('id') id: number) {
    console.log('Entrou no método: Excluir');

    this.appService.excluir(id);
  }
}
