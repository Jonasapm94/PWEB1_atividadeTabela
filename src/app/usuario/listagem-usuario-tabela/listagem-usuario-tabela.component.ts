import { Component } from '@angular/core';
import { Usuario } from 'src/app/shared/modelo/usuario';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
  selector: 'app-listagem-usuario-tabela',
  templateUrl: './listagem-usuario-tabela.component.html',
  styleUrls: ['./listagem-usuario-tabela.component.css']
})
export class ListagemUsuarioTabelaComponent {

  usuarios: Usuario[] = [];
  columnsToDisplay = ['nome','cpf', 'idade', 'acoes'];

  constructor(private usuarioService: UsuarioService) {
  }

  ngOnInit(): void {
    this.usuarioService.listar().subscribe(
      (      usuariosRetornados: Usuario[]) =>
        this.usuarios = usuariosRetornados
    );
    console.log('estou aqui');
  }

  excluir(usuarioARemover: Usuario): void {
    console.log(this.usuarios)
    if (usuarioARemover.id) {
      this.usuarioService.apagar(usuarioARemover.id).subscribe(
        (        _: any) => {
          const indx = this.usuarios.findIndex(usuario =>
            usuario.id === usuarioARemover.id);
          this.usuarios.splice(indx, 1);
        }
      );
    }

  }

}
