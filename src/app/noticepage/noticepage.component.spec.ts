import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticepageComponent } from './noticepage.component';

describe('NoticepageComponent', () => {
  let component: NoticepageComponent;
  let fixture: ComponentFixture<NoticepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
