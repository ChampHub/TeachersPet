import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {StudentsList} from "../students-list/students-list";
import {ClassListPage} from "../class-list/class-list";
import {  DataService } from '../../providers/data-service'
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login-page',
  templateUrl: 'login-page.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public dataService: DataService) {
  }

  ionViewDidLoad() {
    this.dataService.getUser().subscribe(user => console.log(user)
    );
  }
  navToStudentsList(){
    this.navCtrl.push(ClassListPage);
  }

  signIn(){
    this.dataService.signIn();
  }
}
