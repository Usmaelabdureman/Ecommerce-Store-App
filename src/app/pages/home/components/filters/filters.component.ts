import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
})
export class FiltersComponent implements OnInit{
@Output()showCategory = new EventEmitter<string>();
  categories = ["Earpodes","shoes","books","Female Shoes"]
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  OnShowCategory(category:string):void{
    this.showCategory.emit(category);

  }

}
