import { TestBed } from '@angular/core/testing';

import { BuyNotebookService } from './buy-notebook.service';

describe('BuyNotebookService', () => {
  let service: BuyNotebookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyNotebookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
