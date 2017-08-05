import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DepartureModule } from '../../../providers/departure/departure';


@IonicPage()
@Component({
  selector: 'page-departure-changedate',
  templateUrl: 'departure-changedate.html',
})
export class DepartureChangeDatePage {
  touching = false;
  timeout: any;
  rowHeight = 25;//height of each row in px; Match to css;
  animationFrame: any;
  constructor(
    private navParams: NavParams,
    private navCtrl: NavController,
    private mDepartureModule: DepartureModule,
  ) {

  }
  ionViewDidEnter() {
    let scrollElm = document.getElementById('solar-date'); 
    scrollElm.addEventListener('scroll', (event) => {
      console.log(event.timeStamp, this.touching);
      if (!this.touching) {
        this.scrollEnd(scrollElm);
      }
    })
    scrollElm.addEventListener('touchstart', () => {
      this.touching = true;
    })
    scrollElm.addEventListener('touchend', () => {
      this.touching = false;
    })
  }

  scrollToTop(element: HTMLElement, scrollTop) {
    let deltaDistance = 4 //in px;
    let nowScrollTop = element.scrollTop;
    if (this.animationFrame) cancelAnimationFrame(this.animationFrame);
    if (Math.abs(nowScrollTop - scrollTop) <= deltaDistance) {
      element.scrollTop = scrollTop;
      return;
    }
    let signal = Math.abs(nowScrollTop - scrollTop) / (scrollTop - nowScrollTop);//-1 or 1;
    this.animationFrame = requestAnimationFrame(() => {
      element.scrollTop = nowScrollTop + signal * deltaDistance;
      this.scrollToTop(element, scrollTop);
    })
  }

  scrollEnd(scrollElm: HTMLElement) {
    //end of touch. May be end of scrolling. Just reset timeout. 
    //Scroll event fire about every 30ms so 100ms timeout is fine
    if (this.timeout) clearTimeout(this.timeout);
    if (this.animationFrame) cancelAnimationFrame(this.animationFrame);
    setTimeout(() => {
      let scrollTop = scrollElm.scrollTop;
      this.scrollToTop(scrollElm, Math.round(scrollTop / this.rowHeight) * this.rowHeight);
    }, 100)
  }
}
