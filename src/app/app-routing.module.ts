import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Sign } from './vo/sign';
import { SignComponent } from './sign/sign.component';
import { MainComponent } from './main/main.component';
import { Product } from './vo/product';
import { ProductComponent } from './product/product.component';
import { ProductviewComponent } from './productview/productview.component';
import { AdminComponent } from './admin/admin.component';
import { UsermanagementComponent } from './admin/usermanagement/usermanagement.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sign',
    component: SignComponent
  },
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'product',
    component : ProductComponent
  },
  {
    path:'admin',
    component:AdminComponent
  },
  {
    path:'productview',
    component:ProductviewComponent
  },
  {
    path:'usermanagement',
    component:UsermanagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

