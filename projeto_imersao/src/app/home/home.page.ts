import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { CatsService } from '../services/cat/cats.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  nome: string = '';

  constructor(private catSrvc: CatsService, private router: Router) {}

  //Remover o nome da caixa de pesquisa assim que o usuário sair da página
  ionViewDidLeave(){
    this.nome = '';
  }

  async procurarGato(nome: string){
    //Passar o nome para o service
    this.catSrvc.nome = this.nome;
    //Mover para a página cat-info
    this.router.navigateByUrl('/cat-info');
  }
}