import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: ` <router-outlet></router-outlet> `,
})
export class DashboardComponent implements OnInit {

  public constructor() { }

  public ngOnInit(): void {
  }

}
