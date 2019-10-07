import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErxkvComponentLibComponent } from './erxkv-component-lib.component';

describe('ErxkvComponentLibComponent', () => {
  let component: ErxkvComponentLibComponent;
  let fixture: ComponentFixture<ErxkvComponentLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErxkvComponentLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErxkvComponentLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
