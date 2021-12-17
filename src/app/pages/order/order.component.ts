import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  template: ` <router-outlet></router-outlet> `,
})
export class OrderComponent implements OnInit {

  public constructor() { }

  public ngOnInit(): void {
  }

}
