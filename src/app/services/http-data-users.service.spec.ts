import { TestBed } from '@angular/core/testing';

import { HttpDataUsersService } from './http-data-users.service';

describe('HttpDataUsersService', () => {
  let service: HttpDataUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpDataUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
