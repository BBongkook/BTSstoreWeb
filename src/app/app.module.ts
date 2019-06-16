import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { NgDaumAddressModule } from 'ng2-daum-address';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductviewComponent } from './productview/productview.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    SignComponent,
    MainComponent,
    ProductComponent,
    ProductviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgDaumAddressModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
