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
import { ProductComponent } from './productTable/product.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductviewComponent } from './productview/productview.component';
import { AdminComponent } from './admin/admin.component';
import { UsermanagementComponent } from './admin/usermanagement/usermanagement.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule, ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { CategoryComponent } from './category/category.component';
import { ProductmanageComponent } from './admin/productmanage/productmanage.component';
import { ProductinsertComponent } from './admin/productinsert/productinsert.component';
import { MypageComponent } from './user/mypage/mypage.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { MyInfoManagementComponent } from './user/mypage/my-info-management/my-info-management.component';
import { WithdrawalComponent } from './user/mypage/withdrawal/withdrawal.component';
import { NoticepageComponent } from './noticepage/noticepage.component';
import { OrderComponent } from './order/order.component';
import { OrderInfoComponent } from './user/mypage/order-info/order-info.component';
import { CartInfoComponent } from './user/mypage/cart-info/cart-info.component';
import { PaymentComponent } from './payment/payment.component';
import { DeliveryChangeComponent } from './payment/delivery-change/delivery-change.component';
// import { Directive, Pipe } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    SignComponent,
    MainComponent,
    ProductComponent,
    ProductviewComponent,
    AdminComponent,
    UsermanagementComponent,
    CategoryComponent,
    ProductmanageComponent,
    ProductinsertComponent,
    MypageComponent,
    MyInfoManagementComponent,
    WithdrawalComponent,
    NoticepageComponent,
    OrderComponent,
    OrderInfoComponent,
    CartInfoComponent,
    PaymentComponent,
    DeliveryChangeComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgDaumAddressModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    NgxPaginationModule,
    // Directive,
    // Pipe,
  ],
  entryComponents: [
    ProductComponent
  ],
  providers: [ 
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
