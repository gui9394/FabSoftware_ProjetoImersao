import { Component} from '@angular/core';
import { CatsService } from '../services/cat/cats.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-cat-info',
  templateUrl: './cat-info.page.html',
  styleUrls: ['./cat-info.page.scss'],
})
export class CatInfoPage{

  constructor(private catsSrvc: CatsService, private router: Router, public alertController: AlertController) {
  }

  res: any = []
  results: any = {}

  //Variável auxiliar para verificar se a conexão com a API foi feita com sucesso
  carregou:boolean = false;
  
  //Antes da página carregar, ele realizará a função de procurar gato.
  ionViewWillEnter(){
    this.procurandoGato();
  }

  //Aqui nós temos uma função para procurar o gato na API
  async procurandoGato(){
    try{
      await this.catsSrvc.procurarGato(this.catsSrvc.nome).subscribe(data => {
        console.log(this.catsSrvc.nome)
        this.res = data;

        //Verificando se há ou não gatos com esse id na API
        if((Object.keys(this.res).length <= 0) ||this.catsSrvc.nome == ""){
        this.carregou = false;
        this.presentAlert();
        this.router.navigateByUrl('/home');
        }
        else{
          this.carregou = true;
        }
      })
    }
    catch(error){
      console.log(error);
    }
  }

  //Mostrar alerta
  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'Não foi possível encontrar essa raça!',
      buttons: ['OK']
    });
  
    await alert.present();
  }
}