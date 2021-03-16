import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindageComponent } from './findage.component';

describe('FindageComponent', () => {
  let component: FindageComponent;
  let fixture: ComponentFixture<FindageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
