import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
})
export class ProductsHeaderComponent implements OnInit {

  @Output()columnsCountChange = new EventEmitter<number>();
  sort='desc'
  itemShowCount=12
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  OnSortUpdated(newSort:string): void{
    this.sort=newSort;
  }

  OnItemUpdated (count:number):void{
    this.itemShowCount=count;
  }
  OncolumnsUpdate(colsNum:number):void{
    this.columnsCountChange.emit(colsNum);

}
}


