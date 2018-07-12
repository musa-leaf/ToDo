import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
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


  constructor(public navCtrl: NavController, public navParams: NavParams,  public toastCtrl: ToastController) {
   
  }

  title : string;
  note : string = "";
  myDate;

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  addItem(){

    this.navCtrl.setRoot("ViewPage",{
      title : this.title,
      note : this.note,
      myDate : this.myDate

    });

    this.note = "";
    this.title = "";
  }

  refreshScreen(event){
    this.note = "";
    this.title = "";
    event.complete();
    this.presentToast("refreshed");
  }

  presentToast(message) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 1500
    });
    toast.present();
  }


}
