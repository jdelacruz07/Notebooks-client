import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdModalContentComponent } from './ngbd-modal-content.component';

describe('NgbdModalContentComponent', () => {
  let component: NgbdModalContentComponent;
  let fixture: ComponentFixture<NgbdModalContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ NgbModule ] ,
      declarations: [ NgbdModalContentComponent ],
      providers: [
        NgbActiveModal
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbdModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
