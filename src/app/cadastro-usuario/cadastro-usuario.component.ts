import { Component, OnInit, NgModule, Injectable } from '@angular/core';
import { Usuario } from '../Usuario';
import { FormsModule } from '@angular/forms';
import { UsuarioProvider } from '../providers/UsuarioProvider';

@NgModule({
    imports: [
        FormsModule      
    ]
  }
)

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css'],
  providers:[
    UsuarioProvider
  ]
})


export class CadastroUsuarioComponent implements OnInit {
  
  usuario: Usuario = new Usuario();
  
  

  constructor(private usuarioProvider: UsuarioProvider) {
    }

  ngOnInit() {
 //   this.usuario.nome = "Luiz";
   // this.usuario.email = "luizfpvieira@gmail.com";
  }

  cadastrar(){
    this.usuarioProvider.cadastrarUsuario(this.usuario)
    .subscribe(
      res => {
          console.log(res);
          console.log(JSON.stringify(res));
          });
    
    console.log("Nome: "+this.usuario.nome);

    
  }

  exibirUsuarios(){
      this.usuarioProvider.exibirUsuarios()
    .subscribe(
      data=>{
        console.log(data);
        console.log(JSON.stringify(data));
      }
    )
  }

}
