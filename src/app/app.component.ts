import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppController } from '../providers/app-controller';
 


export class MenuItem {
  name: string;
  id: number;
  icon: string;
  page: string;
  isActive: boolean
}
export class MenuCategory {
  id: number;
  name: string;
  items: Array<MenuItem>;
}
export class Menu {
  id: number;
  name: string;
  active: boolean;
  categories: Array<MenuCategory>;
}
export class AppMenu {
  menus: Array<Menu>;
}
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = "DepartureLoadingPage";
  // rootPage: any = "DepartureChangeDatePage";
  mMenuController: MenuController;
  mLotteryMenu: any = [];

  mLotteryMenuOther: Array<MenuItem> = [];
  constructor( private menuController: MenuController, public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      splashScreen.hide();
      AppController.getInstance().setPlatform(platform); 
    });
  } 
 
}
