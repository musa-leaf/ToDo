import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TODOLIST } from '../../mocks/todo.mocks';

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


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = navParams.get("title");
    this.note = navParams.get("note");
    this.myDate = navParams.get("myDate");

    if(this.note != "" && this.note != undefined){
      this.items.push({
        title : this.title,
        note : this.note,
        myDate : this.myDate,
        done : false
      
      }); 
    }

    this.items.reverse();
  }

  ionViewDidLoad() {
    console.log(this.items);
  }

}
