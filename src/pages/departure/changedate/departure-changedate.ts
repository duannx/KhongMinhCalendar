import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DepartureModule } from '../../../providers/departure/departure';


@IonicPage()
@Component({
  selector: 'page-departure-changedate',
  templateUrl: 'departure-changedate.html',
})
export class DepartureChangeDatePage {

  constructor(
    private navParams: NavParams,
    private navCtrl: NavController,
    private mDepartureModule: DepartureModule,
  ) {
 
  }
}
