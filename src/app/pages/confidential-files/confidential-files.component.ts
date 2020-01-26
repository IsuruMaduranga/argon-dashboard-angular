import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'confidential-files',
  templateUrl: './confidential-files.component.html',
  styleUrls: ['./confidential-files.component.scss']
})
export class ConfidentialFilesComponent implements OnInit {

  public copy: string;
  constructor() { }

  ngOnInit() {
  }
}
