import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TODOLIST } from '../../mocks/todo.mocks';
import { ToastController } from 'ionic-angular';


/**
 * Generated class for the ViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
})
export class ViewPage {
  
  items : any = TODOLIST;
  title : string;
  note : string;
  myDate : string;


  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
    this.title = navParams.get("title");
    this.note = navParams.get("note");
    this.myDate = navParams.get("myDate");

    if(this.note != "" && this.note != undefined){
      TODOLIST.push({
        title : this.title,
        note : this.note,
        myDate : this.myDate,
        done : false
      
      });
      this.presentToast("data  added sucessfully"); 
    }
    
    TODOLIST.reverse();
  }

  //add item
  goToAdd(){
    this.navCtrl.push("HomePage");
  }

  //delete item
  delete(arg){
    console.log(arg);
    TODOLIST.splice(arg,1);
  }

  presentToast(message) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 1500
    });
    toast.present();
  }

}
