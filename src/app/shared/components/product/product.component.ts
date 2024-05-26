import { Component } from "@angular/core";
import { Iplayers } from "src/app/app.component";


@Component({
    selector : 'app-product',
    templateUrl : './product.component.html',
    styleUrls : ['./product.component.scss']
})
export class ProductComponent {
    productName : string = 'sumsung';
    productId : number = 9597;
    skills : Array<string> = ['html','css','js','ts','angular'];
    
    players : Array<Iplayers> = [
    {
	 fname : 'Sachin',
     lname : 'Tendulkar',
     nickname : 'masterB',
     number : 10
    },	
	{
	 fname : 'Rhoit',
     lname : 'Sharama',
     nickname : 'Hitman',
     number : 45
    },
	{
	 fname : 'Virat',
     lname : 'Kholi',
     nickname : 'chiku',
     number : 21
    }
	
];
      constructor(){

      }
}


