import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common/common.service';
import { Product } from 'src/app/vo/product';



export interface Large {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-productinsert',
  templateUrl: './productinsert.component.html',
  styleUrls: ['./productinsert.component.css']
})

export class ProductinsertComponent implements OnInit {
  pd:Product = new Product();
  
  pLarge_level:any;
  exam_title:any;
  degreeTitleList = [];

  constructor(private cs:CommonService) { }

  ngOnInit() {
  }


  pLargeList: any = [
    {
      'pLargeName': '노트북',
      degreeTitleList: [
        'SAMSUNG', 'LG', 'Other',
      ]
    },
    {
      'pLargeName': '소프트웨어',
      degreeTitleList: [
        'OS', 'OA', 'Other'
      ]
    }
  ];
  
  pLargeLevelChangeAction(pLarge) {
    this.exam_title="";
    let dropDownData = this.pLargeList.find((data: any) => data.pLargeName === pLarge);
    if (dropDownData) {
      this.degreeTitleList = dropDownData.degreeTitleList;
      if(this.degreeTitleList){
        this.exam_title=this.degreeTitleList[0];
      }
      
    } else {
      this.degreeTitleList = [];
    }

  }

  insertProduct(){
    this.pd.pLarge = this.pLarge_level;
    this.pd.pMedium = this.exam_title;
    console.log(this.pd);
    this.cs.postFile('insertProduct',this.pd).subscribe(res=>{
      if(res==1){
        alert('상품등록 완료');
        location.href = 'admin';
      }else{
        alert('상품등록에 실패하였습니다.');
      }
    });
  }
  setFile(evt){
    this.pd.pImageFile = evt.target.files[0];
}


}