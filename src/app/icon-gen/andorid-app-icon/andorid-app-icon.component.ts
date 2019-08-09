import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-andorid-app-icon',
  templateUrl: './andorid-app-icon.component.html',
  styleUrls: ['./andorid-app-icon.component.scss']
})
export class AndoridAppIconComponent implements OnInit {

  public imagePath;
  imgURL: any;
  public message: string;

  constructor() { }

  ngOnInit() {
  }

  preview(files) {
    if (files.length === 0) {
      return;
    }

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (() => {
      this.imgURL = reader.result;
    });
  }

}
