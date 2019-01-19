import { Injectable } from '@angular/core';
import { FileChooser } from '@ionic-native/file-chooser';

@Injectable()
export class FileConverterProvider {

	importedFile: string = "";

	constructor (
		private fileChooser: FileChooser
	) { }

	browseFile (): void {
		this.fileChooser.open().then(value => {
			this.importedFile = value;
			console.log(this.importedFile);
		});
	}

}
