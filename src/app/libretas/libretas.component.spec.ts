import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibretasComponent } from './libretas.component';

describe('LibretasComponent', () => {
  let component: LibretasComponent;
  let fixture: ComponentFixture<LibretasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibretasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibretasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
