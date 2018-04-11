import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

import { TabsPage } from '../tabs/tabs'

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

<<<<<<< HEAD
  login() {
    this.navCtrl.push(TabsPage);
  }

=======
  login(){
    this.navCtrl.push(TabsPage);
  }


>>>>>>> 44c566252d55ac719a68aa31922418af3656e8eb
}
