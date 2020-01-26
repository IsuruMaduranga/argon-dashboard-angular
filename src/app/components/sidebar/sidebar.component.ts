import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/file-upload', title: 'File Upload',  icon: 'ni-archive-2 text-primary', class: '' },
    { path: '/secret-files', title: 'Secret Files',  icon:'ni-briefcase-24 text-red', class: '' },
    { path: '/confidential-files', title: 'Confidential Files',  icon:'ni-paper-diploma text-orange', class: '' },
    { path: '/public-files', title: 'Public Files',  icon:'ni-single-copy-04 text-yellow', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
