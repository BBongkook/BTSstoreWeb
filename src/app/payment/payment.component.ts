import { Component, OnInit } from '@angular/core';
import { User } from '../vo/user';
import { CommonService } from '../common/common.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  userlist:User[] = [];
  constructor(private _cs:CommonService) { 
    this._cs.get('/userId/'+sessionStorage.getItem('id')).subscribe(
      res=>{
        console.log(res);
        this.userlist=<User[]>res
      }
    )

    
  }

  ngOnInit() {
   
  }

}