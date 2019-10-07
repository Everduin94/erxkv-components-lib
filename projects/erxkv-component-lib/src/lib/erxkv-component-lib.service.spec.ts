import { TestBed } from '@angular/core/testing';

import { ErxkvComponentLibService } from './erxkv-component-lib.service';

describe('ErxkvComponentLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErxkvComponentLibService = TestBed.get(ErxkvComponentLibService);
    expect(service).toBeTruthy();
  });
});
