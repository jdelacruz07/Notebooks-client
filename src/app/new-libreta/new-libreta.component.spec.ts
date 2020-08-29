import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLibretaComponent } from './new-libreta.component';

describe('NewLibretaComponent', () => {
  let component: NewLibretaComponent;
  let fixture: ComponentFixture<NewLibretaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLibretaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLibretaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
