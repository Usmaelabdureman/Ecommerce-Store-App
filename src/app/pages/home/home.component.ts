import { Component, OnInit } from '@angular/core';


const   ROW_HEIGHT: {[id:number]:number }={1:400,3:335}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
  
  }
 
  cols=3
  rowHeight=ROW_HEIGHT[this.cols]
  category : string | undefined
//   users = userData;
//   message='User List';
OnColumnsCountChange(colsNum:number):void{
  this.cols=colsNum;
}
onShowCategory(newCategory:string){
  this.category = newCategory;

}

}
