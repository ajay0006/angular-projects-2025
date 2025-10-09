import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseColumnSelector } from './case-column-selector';

describe('CaseColumnSelector', () => {
  let component: CaseColumnSelector;
  let fixture: ComponentFixture<CaseColumnSelector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseColumnSelector]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseColumnSelector);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
