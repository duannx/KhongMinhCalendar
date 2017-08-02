import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DepartureModule } from '../../../providers/departure/departure';
import { Departure } from '../../../providers/departure/class/departure';
import { Calendar } from '../../../providers/departure/class/calendar';
import { DatePicker } from '@ionic-native/date-picker';

@IonicPage()
@Component({
  selector: 'page-departure-calendar',
  templateUrl: 'departure-calendar.html',
})
export class DepartureCalendarPage {
  public departureDays: Array<Departure> = [];
  public dayOfWeek = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
  calendar: Calendar;
  public selectedMonth = 7;//Index at 0;
  public selectedDate: Departure;
  public currentDate: Departure;
  //dữ liệu về ngày xuất hành
  departureData: any;
  constructor(
    private navParams: NavParams,
    private navCtrl: NavController,
    private mDepartureModule: DepartureModule,
    private datePicker: DatePicker
  ) {
    this.currentDate = new Departure(new Date());
    this.selectedDate = new Departure(new Date());
    this.calendar = new Calendar(this.currentDate.date.getMonth(), this.currentDate.date.getFullYear());
    console.log("calendar", this.calendar, this.selectedDate);
    if (!this.departureData) {
      this.mDepartureModule.getData().then(
        data => {
          this.departureData = data;
        }, error => { }
      );
    }
    // this.getQuoteAndDayName(this.selectedDate);
  }
  //Load data
  onInputChange(month, year) {
    this.calendar.setTime(month, year);
  }

  getDate(date: Date) {
    return date.getDate();
  }
  daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }


  //lấy tên và lời khuyên cho ngày
  getQuoteAndDayName(departure: Departure) {
    let data = this.mDepartureModule.getQuoteAndNameOfDay(departure.lunarDate, departure.lunarMonth, this.departureData);
    departure.nameOfDay = data[0].toString();
    departure.comment = data[1].toString();
  }

  pickSolarDate() {
    this.datePicker.show({
      date: new Date(),
      mode: 'month'
    }).then(
      date => {
        console.log("date", date);
      },
      err => console.log('Error occurred while getting date: ', err)
      );
  }

}
