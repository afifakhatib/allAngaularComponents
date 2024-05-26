import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './shared/components/product/product.component';
import {PostCardComponent} from './shared/components/postCard/postCard.component'
import {ProductsComponent} from "./shared/components/products/products.component";
import {MovieComponent}  from './shared/components/TMDB/TMDB.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    PostCardComponent,
    ProductsComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
