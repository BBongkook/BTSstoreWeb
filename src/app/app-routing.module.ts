import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './productTable/product.component';
import { ProductviewComponent } from './productview/productview.component';
import { AdminComponent } from './admin/admin.component';
import { UsermanagementComponent } from './admin/usermanagement/usermanagement.component';
import { CategoryComponent } from './category/category.component';
import { ProductinsertComponent } from './admin/productinsert/productinsert.component';
import { MypageComponent } from './user/mypage/mypage.component';
import { RouterGuardService } from './auth/router-guard.service';
import { MyInfoManagementComponent } from './user/mypage/my-info-management/my-info-management.component';
import { WithdrawalComponent } from './user/mypage/withdrawal/withdrawal.component';
import { NoticepageComponent } from './noticepage/noticepage.component';
import { CartInfoComponent } from './user/mypage/cart-info/cart-info.component';
import { PaymentComponent } from './payment/payment.component';
import { DeliveryChangeComponent } from './payment/delivery-change/delivery-change.component';
import { OrderInfoComponent } from './user/mypage/order-info/order-info.component';
import { OrderComponent } from './user/mypage/order-list/order.component';

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
    component: AdminComponent
  },
  {
    path: 'productview',
    component: ProductviewComponent
  },
  {
    path: 'usermanagement',
    component: UsermanagementComponent
  },
  {
    path: 'noticepage',
    component: NoticepageComponent
  },
  {
    path: 'category',
    component: CategoryComponent
  },
  {
    path: 'productmanage',
    component: ProductComponent,
  },
  {
    path: 'productinsert',
    component: ProductinsertComponent,
  },
  {
    path: 'myinfomanagement',
    component: MyInfoManagementComponent
  },
  {
    path: 'cartinfo',
    component: CartInfoComponent
  },
  {
    path : 'orderlist',
    component: OrderComponent
  },
  {
    path: 'orderinfo',
    component : OrderInfoComponent
  },
  {
    path: 'withdrawal',
    component: WithdrawalComponent
  },
  {
    path: 'mypage',
    component: MypageComponent
  },
  {
    path: 'payment',
    component: PaymentComponent
  },
  {
    path: 'delivery_change',
    component: DeliveryChangeComponent
  },
  {
    path: '**',
    redirectTo:'/',
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

