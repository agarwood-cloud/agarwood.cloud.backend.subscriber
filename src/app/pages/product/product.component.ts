import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  template: ` <router-outlet></router-outlet> `,
})
export class ProductComponent implements OnInit {

  public constructor() { }

  public ngOnInit(): void {
  }

}
