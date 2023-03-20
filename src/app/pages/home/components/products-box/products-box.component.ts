import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-box',
  templateUrl: './products-box.component.html',
})
export class ProductsBoxComponent implements OnInit {
[x: string]: any;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @Input() fullWidthMode = false;
}
