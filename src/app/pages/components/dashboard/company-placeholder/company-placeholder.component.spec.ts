import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CompanyPlaceholderComponent } from './company-placeholder.component';

describe('CompanyPlaceholderComponent', () => {
  let component: CompanyPlaceholderComponent;
  let fixture: ComponentFixture<CompanyPlaceholderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyPlaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
