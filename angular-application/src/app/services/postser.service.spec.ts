import { TestBed } from '@angular/core/testing';

import { PostserService } from './postser.service';

describe('PostserService', () => {
  let service: PostserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
