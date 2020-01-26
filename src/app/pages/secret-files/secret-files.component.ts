import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'secret-files',
  templateUrl: './secret-files.component.html',
  styleUrls: ['./secret-files.component.scss']
})
export class SecretFilesComponent implements OnInit {

  public copy: string;
  constructor() { }

  ngOnInit() {
  }
}
