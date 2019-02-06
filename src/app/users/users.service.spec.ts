import { TestBed } from '@angular/core/testing';

import { UsersViewModelService } from './users.service';

describe('UsersViewModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [UsersViewModelService]
  }));

  it('should be created', () => {
    const service: UsersViewModelService = TestBed.get(UsersViewModelService);
    expect(service).toBeTruthy();
  });
});
