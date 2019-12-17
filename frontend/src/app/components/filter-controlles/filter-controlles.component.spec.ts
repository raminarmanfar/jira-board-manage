import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterControllesComponent } from './filter-controlles.component';

describe('FilterControllesComponent', () => {
  let component: FilterControllesComponent;
  let fixture: ComponentFixture<FilterControllesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterControllesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterControllesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
