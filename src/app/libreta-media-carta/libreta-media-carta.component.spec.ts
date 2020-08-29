import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibretaMediaCartaComponent } from './libreta-media-carta.component';

describe('LibretaMediaCartaComponent', () => {
  let component: LibretaMediaCartaComponent;
  let fixture: ComponentFixture<LibretaMediaCartaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibretaMediaCartaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibretaMediaCartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
