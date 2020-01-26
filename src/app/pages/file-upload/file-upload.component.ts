import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  afuConfig = {
    uploadAPI: {
      url: "https://example-file-upload-api"
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
