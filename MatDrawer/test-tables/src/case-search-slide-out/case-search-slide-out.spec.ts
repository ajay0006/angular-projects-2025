import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseSearchSlideOut } from './case-search-slide-out';

describe('CaseSearchSlideOut', () => {
  let component: CaseSearchSlideOut;
  let fixture: ComponentFixture<CaseSearchSlideOut>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseSearchSlideOut]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseSearchSlideOut);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
