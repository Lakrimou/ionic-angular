import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CtagorProvider } from '../../providers/ctagor/ctagor';

/**
 * Generated class for the CtgsegPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-ctgseg',
  templateUrl: 'ctgseg.html',
})
export class CtgsegPage {


  id: any;
  subcategs: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public ctagorProvider: CtagorProvider) {
    this.id = this.navParams.get('id');
    console.log(this.id.id);
    this.getSubcategs(this.id.id)
  }
  getSubcategs(idd) {
    this.ctagorProvider.getSubcategs(idd)
        .then(data => {
          this.subcategs = data;
          console.log('*********je suis la******');

          console.log(this.subcategs);
        });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CtgsegPage');
  }

}
