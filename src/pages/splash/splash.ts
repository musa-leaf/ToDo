import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

@IonicPage()
@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {
  
  timer : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.timer = Observable.interval(1000).subscribe(
      x => {
        if(x == 1){
          this.timer.unsubscribe();
          this.navCtrl.setRoot("ViewPage");
        }
      }
    );
  }

}
