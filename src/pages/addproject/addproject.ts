import { Component } from '@angular/core';
import { NavController, App, MenuController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';


@Component({
  selector: 'page-addproject',
  templateUrl: 'addproject.html'
})
export class AddProjectPage {

  constructor(public navCtrl: NavController, public app: App, menu: MenuController) {
   
      menu.enable(true);
  }

  

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.setRoot(page.component);
  }

  addProject(){
        this.navCtrl.push(TabsPage);
      }

}
