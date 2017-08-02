import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DepartureModule } from '../../../providers/departure/departure';


@IonicPage()
@Component({
  selector: 'page-departure-more',
  templateUrl: 'departure-more.html',
})
export class DepartureMorePage {

  constructor(
    private navParams: NavParams,
    private navCtrl: NavController,
    private mDepartureModule: DepartureModule,
  ) {


  }
}
