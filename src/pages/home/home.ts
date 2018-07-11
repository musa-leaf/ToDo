import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
  }

  title : string;
  note : string = "";
  myDate;

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  addItem(){

    this.navCtrl.push("ViewPage",{
      title : this.title,
      note : this.note,
      myDate : this.myDate

    });

    this.note = "";
    this.title = "";
  }

}
