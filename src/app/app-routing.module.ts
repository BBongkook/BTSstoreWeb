import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './product/product.component';
import { ProductviewComponent } from './productview/productview.component';
import { AdminComponent } from './admin/admin.component';
import { UsermanagementComponent } from './admin/usermanagement/usermanagement.component';
import { CategoryComponent } from './category/category.component';
import { ProductinsertComponent } from './admin/productinsert/productinsert.component';
import { MypageComponent } from './user/mypage/mypage.component';
import { RouterGuardService } from './auth/router-guard.service';

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
    component: ProductComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate:[RouterGuardService]
  },
  {
    path: 'productview',
    component: ProductviewComponent
  },
  {
    path: 'usermanagement',
    component: UsermanagementComponent,
    canActivate:[RouterGuardService]
  },
  {
    path: 'category',
    component: CategoryComponent
  },
  {
    path: 'productmanage',
    component: ProductComponent,
    canActivate:[RouterGuardService]
  },
  {
    path: 'productinsert',
    component: ProductinsertComponent,
    canActivate:[RouterGuardService]
  },
  {
    path: 'mypage',
    component: MypageComponent,
    canActivate:[RouterGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

