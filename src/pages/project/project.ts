import { Component } from '@angular/core';
import { NavController, App, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-project',
  templateUrl: 'project.html'
})
export class ProjectPage {

  constructor(public navCtrl: NavController, public app: App, menu: MenuController) {
   
      menu.enable(true);
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.setRoot(page.component);
  }
}
