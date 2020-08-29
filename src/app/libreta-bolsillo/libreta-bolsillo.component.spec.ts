import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibretaBolsilloComponent } from './libreta-bolsillo.component';

describe('LibretaBolsilloComponent', () => {
  let component: LibretaBolsilloComponent;
  let fixture: ComponentFixture<LibretaBolsilloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibretaBolsilloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibretaBolsilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
