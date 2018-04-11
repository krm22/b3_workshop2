import { Component } from '@angular/core';
import { NavController, App, MenuController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public app: App, menu: MenuController) {
    menu.enable(true);
  }

  logout(){
      const root = this.app.getRootNav();
      root.popToRoot();
  }

}
