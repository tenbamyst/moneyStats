import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FileConverterProvider } from '../../providers/file-converter.provider';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	constructor (
		public navCtrl: NavController,
		private fileConverter: FileConverterProvider
	) {

	}

	openPicker (): void {
		this.fileConverter.browseFile();
	}
}
