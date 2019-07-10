import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInfoManagementComponent } from './my-info-management.component';

describe('MyInfoManagementComponent', () => {
  let component: MyInfoManagementComponent;
  let fixture: ComponentFixture<MyInfoManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyInfoManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyInfoManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
