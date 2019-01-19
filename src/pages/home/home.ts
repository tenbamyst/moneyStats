import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FileChooser } from '@ionic-native/file-chooser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public fileChooser: FileChooser
  ) {

  }

  openPicker(): void {
    this.fileChooser.open().then(value => {
      console.log(value);
    });
  }
}
