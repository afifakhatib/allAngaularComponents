import { Component, OnInit , OnDestroy, ViewChild, ElementRef } from "@angular/core";



const cl = console.log;
@Component({
    selector : 'app-products',
    templateUrl : './products.component.html',
    styleUrls : ['./products.component.html']
})
export class ProductsComponent implements OnInit , OnDestroy{
    disabled = false
    productNAME : string = 'laptop';
    productId : number = 9597;
    product : string = `
    <p class="para">The product name is <strong>samsung</strong>
    and the product id is <strong>9795</strong>
</p>
                         `

     @ViewChild('productName') productNameRef !: ElementRef ;
     productCount : number = 0;
     getproductName !: string;
    val:string = 'samsung';
    constructor(){

    }

    ngOnInit() : void {

    }

    onkeyUp(eve: any){
        // cl(eve)
        cl(eve.target.value)
    }

    onProductAdd(product : HTMLInputElement){
        //   cl(product.value)
        let val = this.productNameRef.nativeElement.value as string;
        this.getproductName = val;
        cl(val)
        if(this.productCount < 15){
        this.productCount = this.productCount + 1 
        }
    }

    onProductRemove(){
        if(this.productCount > 0){
             this.productCount = this.productCount - 1
        }
    }

    noProduct(){
        if(this.getproductName == this.getproductName){
            
        }
    }

    ngOnDestroy() : void {
            cl('COMPONENT PRODUCTS IS DSTR')
    }

}