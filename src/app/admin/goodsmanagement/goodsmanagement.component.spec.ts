import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsmanagementComponent } from './goodsmanagement.component';

describe('GoodsmanagementComponent', () => {
  let component: GoodsmanagementComponent;
  let fixture: ComponentFixture<GoodsmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
