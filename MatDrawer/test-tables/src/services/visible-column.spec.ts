import { TestBed } from '@angular/core/testing';

import { VisibleColumn } from './visible-column';

describe('VisibleColumn', () => {
  let service: VisibleColumn;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisibleColumn);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
