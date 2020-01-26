import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'public-files',
  templateUrl: './public-files.component.html',
  styleUrls: ['./public-files.component.scss']
})
export class PublicFilesComponent implements OnInit {

  public copy: string;
  constructor() { }

  ngOnInit() {
  }
}
